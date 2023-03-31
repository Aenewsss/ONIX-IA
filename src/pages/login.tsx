import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {

    const router = useRouter()

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function login(e: any) {
        e.preventDefault()

        router.push('chat')
    }

    return (
        <section className="login-page d-flex flex-column justify-content-center h-100vh align-items-center ">
            <img className="mb-5 pb-5" src="/logo.svg" alt="logo.svg" />
            <div className="container">
                <h1 className="text-white fst-italic">Login</h1>

                <form action="" onSubmit={login}>
                    <div className="mb-4 mt-5">
                        <input required onChange={e => setEmail(e.target.value)} type="email" className="text-white border-0 border-bottom rounded-0 bg-transparent ps-1 form-control fst-italic" placeholder="Email Address" />
                    </div>
                    <div className="mb-5">
                        <input required onChange={e => setPassword(e.target.value)} type="password" className="text-white border-0 border-bottom rounded-0 bg-transparent ps-1 form-control fst-italic" placeholder="Password" />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-dark bg-pink form-control fst-italic">Login</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;