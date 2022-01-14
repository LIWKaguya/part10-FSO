import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-native";
import AuthStorageContext from "../contexts/AuthStorageContext";
import { AUTHORIZE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
    const authStorage = useAuthStorage(AuthStorageContext);
    const [mutate, {data}] = useMutation(AUTHORIZE);
    const history = useHistory();

    const signIn = async ({username, password}) => {
        const {data} = await mutate({ variables: {username, password}});
        await authStorage.setAccessToken(data.authorize.accessToken);
        history.push('/')
    }

    return [signIn, data]
}

export default useSignIn;