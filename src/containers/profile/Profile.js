import React, { lazy, Suspense, useEffect, useState } from "react";
import ApolloClient, { gql } from "apollo-boost"
import {openSource} from "../../portifolio"
import Loading from "../loading/Loading";
import Contact from "../contact/Contact";


const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
    import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
    const [prof, setrepo] = useState([])
    function setProfileData(array) {
        setrepo(array)
    }

    function getProfileData() {
        const client = new ApolloClient({
            uri: "https://api.github.com/graphql",
            request: operation => {
                operation.setContext({
                    headers: {
                        authorization: `Bear ${openSource.githubConvertedToken}`
                    }
                });
            }
        });

        client
            .query({
                query: gql`
                {
                    user(login:"${openSource.githubUserName}") {
                        name
                        bio
                        isHireable
                        avatarUrl
                        location
                    }
                }
                 `
            })
            .then(result => {
                setProfileFunction(result.data.user);
            })
            .catch(function (error) {
                console.log(error);
                setProfileFunction("error")
                console.log(
                    "Because of this Error Contact Section is Shown instead of Profile"
                );
                openSource.showGithubProfile = "false";
            });
    }
    useEffect(() => {
        if (openSource.showGithubProfile == "true") {
            getProfileData();
        }
    }, []);

    if (
        openSource.display &&
        openSource.showGithubProfile == "true" && 
        !(typeof prof === "string" || prof instanceof String)
    ) {
        return (
            <Suspense fallback={renderLoader()}>
                <GithubProfileCard prof={prof} key={prof.id} />
            </Suspense>
        );
    } else {
        return < Contact />
    }
}