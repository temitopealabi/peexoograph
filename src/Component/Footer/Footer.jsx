import React from 'react';
const Footer = () => {
    return (
        <React.Fragment>
            <footer >
                <div className="container">
                    <div className="row">

                        {/* Quick Links div */}
                        <div className="col-md-4">
                            <h4 className="p-2">Quick Links</h4>
                            <div className="p-2 h5">Find a photographer</div>
                            <div className="p-2 h5">Find my photos</div>
                            <div className="p-2 h5">Peexoomemories</div>
                            <div className="p-2 h5">Peexoomemories</div>
                            <div className="p-2 h5">Become a photographer</div>
                        </div>
                        <div className="col-md-4">
                            <h4 className="p-2">Company</h4>
                            <div className="p-2 h5">About Us</div>
                            <div className="p-2 h5">FAQs</div>
                            <div className="p-2 h5">Pricing</div>
                            <div className="p-2 h5">Careers</div>
                            <div className="p-2 h5">Help & Support</div>
                            <div className="p-2 h5">Terms of Service</div>
                            <div className="p-2 h5 pb-2">Privacy Policy</div>
                        </div>
                        <div className="col-md-4">
                            <h4 className="p-2">Connect with Us</h4>
                            <div className="p-2 h5">5A, Awudu Egheda,</div>
                            <div className="p-2 h5">Lekki, Lagos.</div>
                            <div className="p-2 h5">+234 8003229932</div>
                            <div className="p-2 h5">customer.service@peexo.ai</div>
                            <div className="p-2"><span className="pr-2"><img src="/images/footer/whatsapp.png" width="35" alt="whatsapp" /></span>
                                <span className="px-2"><img src="/images/footer/facebook.png" width="35" alt="facebook" /></span>
                                <span className="px-2"><img src="/images/footer/twitter.png" width="35" alt="twitter" /></span>
                                <span className="pl-2"><img src="/images/footer/instagram.png" width="35" alt="instagram" /></span></div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#202020' }}><span><p className="text-center text-white py-3 footerCopyText">© 2019 Peexo Nigeria Limited</p></span></div>
            </footer>
            {/* 
5A, Awudu Egheda,
Lekki, Lagos.
+234 8003229932
customer.service@peexo.ai*/}
        </React.Fragment>
    );
}

export default Footer;