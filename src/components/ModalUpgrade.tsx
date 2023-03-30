const ModalUpgrade = () => {
    return (
        <>
            <button id="modalButton" type="button" className="d-none" data-bs-toggle="modal" data-bs-target="#modalUpgrades">
                Launch
            </button>

            <div className="modal fade" id="modalUpgrades" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title text-white fs-1" id="modalTitleId">Upgrade to Plus</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer text-white">
                            <h4 className="fst-italic text-pink mb-4">Soon you will be able to subscribe to our plan and chat with our AI at ease</h4>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-dark bg-pink border-0">OK</button>
                        </div>
                    </div>
                </div>
            </div>

            <script>const myModal = new bootstrap.Modal(document.getElementById('modalUpgrades'), options)</script>
        </>
    );
}

export default ModalUpgrade;