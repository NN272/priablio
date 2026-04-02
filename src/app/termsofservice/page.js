import Header from "../components/Header/Header";
import { Block, Container } from "./Styles";

export default function TermsOfService() {
    return(
        <div>
            <Header bg="linear-gradient(#18356A, #3D81FF)"></Header>

            <Container>
                <Block>
                    <div style={{width: "100%"}}>
                        <h2 style={{fontSize: "64px"}}>Terms of Service</h2>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>Effective Date: [Вписать сюда актуальную дату]</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            Welcome to Priablio. By accessing or using this website, you agree to comply with and be bound by the following Terms of Service.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>1. Use of the Website</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            This website is intended to provide information about our services and allow users to contact us.
                            <br /> <br/>
                            You agree to use the website only for lawful purposes and in a way that does not harm, disrupt, or interfere with its functionality.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>2. Services</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            Priablio provides creative services including, but not limited to:
                            <br /> <br />
                            • AI Video Production <br />
                            • Video Editing & Post-Production <br />
                            • Motion Design & Visual Effects <br />
                            • Creative Direction <br /> <br />

                            All project details, timelines, and deliverables are agreed upon separately with each client.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>3. Intellectual Property</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            All content on this website, including visuals, design, text, and media, is the property of Priablio unless otherwise stated.
                            <br /> <br />
                            You may not copy, reproduce, or distribute any content without prior written permission.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>4. Client Work & Usage</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            Any work created for clients may be used in our portfolio unless otherwise agreed in writing.
                            <br /> <br />
                            Final ownership and usage rights of deliverables will be defined in individual project agreements.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>5. Payments</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            All payments for services are handled through agreed platforms (e.g., freelance marketplaces or direct agreements).
                            <br /> <br />
                            Work may require upfront payment or milestone-based funding before delivery.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>6. Limitation of Liability</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            Priablio is not liable for:
                            <br /> <br />
                            • Any indirect or consequential damages
                            • Loss of data, revenue, or business opportunities
                            <br /> <br />
                            All services are provided “as is” without guarantees beyond agreed deliverables.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>7. Third-Party Services</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            We may use third-party tools, platforms, or services. We are not responsible for their policies, performance, or availability.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>8. Changes to Terms</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            We reserve the right to update these Terms at any time. Continued use of the website constitutes acceptance of any changes.                        
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>9. Governing Law</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            These Terms shall be governed by and interpreted in accordance with applicable laws.
                        </h5>
                    </div>
                    <div style={{width: "100%", margin: "50px 0 0 0"}}>
                        <h3 style={{fontSize: "32px"}}>10. Contact</h3>
                        <h5 style={{fontSize: "24px", margin: "20px 0 0 0"}}>
                            If you have any questions about this Privacy Policy, you can contact us at: priablio69@gmail.com
                        </h5>
                    </div>
                </Block>
            </Container>
        </div>
    )
}