import { signInWithGooglePopup} from "../../utils/firebase/firebase-utils"
import { createUserDocument } from "../../utils/firebase/firebase-utils";

const SignIn = () => {
const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    createUserDocument(user);
}

    return(<div>
        <h1>Sign IN</h1>
        <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>);
}

export default SignIn;