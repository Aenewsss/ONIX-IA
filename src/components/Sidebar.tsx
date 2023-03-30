import { useRouter } from "next/router";
import ModalUpgrade from "./ModalUpgrade";

const Sidebar = () => {

    const router = useRouter()

    const logout = () => router.push('login')

    const accountPage = () => router.push('account')

    const showUpgradeModal = () => document.getElementById("modalButton")?.click()

    return (
        <>
            <nav className="navbar navbar-light bg-dark fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar">
                        <img width={80} src="/logo.svg" alt="logo.svg" />
                    </button>
                    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header bg-dark">
                            <img width={80} src="/logo.svg" alt="logo.svg" />
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body bg-dark d-flex flex-column">
                            <ul className="navbar-nav justify-content-end pe-3">
                                <li className="nav-item">
                                    <a role={"button"} onClick={accountPage} className="fs-5 text-white nav-link d-flex gap-2 align-items-center" aria-current="page">
                                        <img width={30} src="/icons/account.svg" alt="account.svg" />
                                        My account
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a role={"button"} onClick={showUpgradeModal} className="fs-5 text-white nav-link d-flex gap-2 align-items-center" aria-current="page">
                                        <img width={30} src="/icons/infinity.svg" alt="infinity.svg" />

                                        Upgrade to Plus
                                    </a>
                                </li>
                            </ul>

                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a role={"button"} onClick={logout} className="fs-5 text-white nav-link d-flex gap-2 align-items-center" aria-current="page">
                                        <img width={30} src="/icons/logout.svg" alt="logout.svg" />

                                        Log out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <ModalUpgrade />
        </>
    );
}

export default Sidebar;