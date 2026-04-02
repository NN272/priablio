import Header from "../components/Header/Header";
import { Block, Container } from "./Styles";

export default function PrivacyPolicy() {
    return(
        <div>
            <Header bg="linear-gradient(#18356A, #3D81FF)"></Header>

            <Container>
                <Block>
                    <div style={{width: "100%"}}>
                        <h2 style={{fontSize: "64px"}}>Privacy Policy</h2>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>Effective Date: [Вписать сюда актуальную дату]</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>Priablio (“we”, “our”, or “us”) respects your privacy and is committed to protecting any personal information you may provide through this website.</h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>1. Information We Collect</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>We may collect the following information when you use our website: <br /> <br/>

                            • Name <br />
                            • Email address <br />
                            • Any information you provide through contact forms <br />
                            • Basic technical data (such as browser type, device, and IP address)</h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>2. How We Use Your Information</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            We use the collected information to: <br /> <br />

                            • Respond to inquiries and communication requests <br />
                            • Provide and improve our services <br />
                            • Maintain website performance and security <br /> <br />

                            We do not sell, rent, or trade your personal information.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>3. Cookies</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            Our website may use cookies to enhance user experience and analyze traffic. <br/> <br/>

                            You can choose to disable cookies through your browser settings.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>4. Third-Party Services</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            We may use third-party tools (such as analytics or hosting services) that may collect limited data in accordance with their own privacy policies.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>5. Data Protection</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            We take reasonable measures to protect your information, but no method of transmission over the internet is 100% secure.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>6. Your Rights</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            You have the right to: <br /> <br />

                            • Request access to your personal data<br />
                            • Request correction or deletion of your data<br />
                            • Withdraw consent at any time <br /> <br />

                            To do so, please contact us directly.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>7. Contact</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            If you have any questions about this Privacy Policy, you can contact us at: priablio69@gmail.com
                        </h5>
                    </div>
                </Block>
            </Container>
        </div>
    )
}