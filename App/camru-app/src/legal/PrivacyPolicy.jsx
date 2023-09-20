import React, { useEffect, useState } from "react";


const PrivacyPolicy = (props) => {
    //I know this is a bad practice, but I'm not sure how to do it better.
  return (
    <div data-custom-class="body">
        <div>
            <strong>
                PRIVACY NOTICE
            </strong>
        </div>
        <div>
            <strong>
                Last updated September 10, 2022
            </strong>
        </div>
        <div>
            This privacy notice for Computing Alliance of Mount Royal University (doing business as CAMRU) ("
            <strong>
                CAMRU
            </strong>
            ," "
            <strong>
                we
            </strong>
            ," "
            <strong>
                us
            </strong>
            ," or "
            <strong>
                our
            </strong>
            "), describes how and why we might collect, store, use, and/or share ("
            <strong>
                process
            </strong>
            ") your information when you use our services ("
            <strong>
                Services
            </strong>
            "), such as when you:
        </div>
        <ul>
            <li>
                Visit our website at camru.ca, or any website of ours that links to this privacy notice
            </li>
        </ul>
        <div>
            <ul>
                <li>
                    Engage with us in other related ways, including any sales, marketing, or events
                </li>
            </ul>
            <div>
                <strong>
                    Questions or concerns?&nbsp;
                </strong>
                Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at contact@mtroyal.ca.
            </div>
            <div>
                <strong>
                    SUMMARY OF KEY POINTS
                </strong>
            </div>
            <div>
                <strong>
                    <em>
                        This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click&nbsp;
                    </em>
                </strong>
                <a href="#toc" data-custom-class="link">
                    <strong>
                        <em>
                            here
                        </em>
                    </strong>
                </a>
                <strong>
                    <em>
                        &nbsp;to go directly to our table of contents.
                    </em>
                </strong>
            </div>
            <div>
                <strong>
                    What personal information do we process?
                </strong>
                When you visit, use, or navigate our Services, we may process personal information depending on how you interact with CAMRU and the Services, the choices you make, and the products and features you use. Click&nbsp;
                <a href="#personalinfo" data-custom-class="link">
                    here
                </a>
                &nbsp;to learn more.
            </div>
            <div>
                <strong>
                    Do we process any sensitive personal information?
                </strong>
                We do not process sensitive personal information.
            </div>
            <div>
                <strong>
                    Do we receive any information from third parties?
                </strong>
                We do not receive any information from third parties.
            </div>
            <div>
                <strong>
                    How do we process your information?
                </strong>
                We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click&nbsp;
                <a href="#infouse" data-custom-class="link">
                    here
                </a>
                &nbsp;to learn more.
            </div>
            <div>
                <strong>
                    In what situations and with which parties do we share personal information?
                </strong>
                We may share information in specific situations and with specific third parties. Click&nbsp;
                <a href="#whoshare" data-custom-class="link">
                    here
                </a>
                &nbsp;to learn more.
            </div>
            <div>
                <strong>
                    How do we keep your information safe?
                </strong>
                We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click&nbsp;
                <a href="#infosafe" data-custom-class="link">
                    here
                </a>
                &nbsp;to learn more.
            </div>
            <div>
                <strong>
                    What are your rights?
                </strong>
                Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click&nbsp;
                <a href="#privacyrights" data-custom-class="link">
                    here
                </a>
                &nbsp;to learn more.
            </div>
            <div>
                <strong>
                    How do you exercise your rights?
                </strong>
                The easiest way to exercise your rights is by filling out our data subject request form available here: camru.ca/Contact, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
            </div>
            <div>
                Want to learn more about what CAMRU does with any information we collect? Click&nbsp;
                <a href="#toc" data-custom-class="link">
                    here
                </a>
                &nbsp;to review the notice in full.
            </div>
            <div id="toc">
                <strong>
                    TABLE OF CONTENTS
                </strong>
            </div>
            <div>
                <a href="#infocollect" data-custom-class="link">
                    1. WHAT INFORMATION DO WE COLLECT?
                </a>
            </div>
            <div>
                <a href="#infouse" data-custom-class="link">
                    2. HOW DO WE PROCESS YOUR INFORMATION?
                </a>
            </div>
            <div>
                <a href="#legalbases" data-custom-class="link">
                    3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
                </a>
            </div>
            <div>
                <a href="#whoshare" data-custom-class="link">
                    4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
            </div>
            <div>
                <a href="#cookies" data-custom-class="link">
                    5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </a>
            </div>
            <div>
                <a href="#sociallogins" data-custom-class="link">
                    6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </a>
            </div>
            <div>
                <a href="#inforetain" data-custom-class="link">
                    7. HOW LONG DO WE KEEP YOUR INFORMATION?
                </a>
            </div>
            <div>
                <a href="#infosafe" data-custom-class="link">
                    8. HOW DO WE KEEP YOUR INFORMATION SAFE?
                </a>
            </div>
            <div>
                <a href="#privacyrights" data-custom-class="link">
                    9. WHAT ARE YOUR PRIVACY RIGHTS?
                </a>
            </div>
            <div>
                <a href="#DNT" data-custom-class="link">
                    10. CONTROLS FOR DO-NOT-TRACK FEATURES
                </a>
            </div>
            <div>
                <a href="#caresidents" data-custom-class="link">
                    11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </a>
            </div>
            <div>
                <a href="#policyupdates" data-custom-class="link">
                    12. DO WE MAKE UPDATES TO THIS NOTICE?
                </a>
            </div>
            <div>
                <a href="#contact" data-custom-class="link">
                    13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>
            </div>
            <div>
                <a href="#request" data-custom-class="link">
                    14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                </a>
            </div>
            <div id="infocollect">
                <strong>
                    1. WHAT INFORMATION DO WE COLLECT?
                </strong>
            </div>
            <div id="personalinfo">
                <strong>
                    Personal information you disclose to us
                </strong>
            </div>
            <div>
                <div>
                    <strong>
                        <em>
                            In Short:
                        </em>
                    </strong>
                    <em>
                        We collect personal information that you provide to us.
                    </em>
                </div>
            </div>
            <div>
                We collect personal information that you voluntarily provide to us when you register on the Services,&nbsp;express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
            </div>
            <div>
                <strong>
                    Personal Information Provided by You.
                </strong>
                The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
            </div>
            <ul>
                <li>
                    names
                </li>
            </ul>
            <ul>
                <li>
                    email addresses
                </li>
            </ul>
            <ul>
                <li>
                    university program and year
                </li>
            </ul>
            <div id="sensitiveinfo">
                <strong>
                    Sensitive Information.
                </strong>
                We do not process sensitive information.
            </div>
            <div>
                <strong>
                    Social Media Login Data.&nbsp;
                </strong>
                We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called "
                <a href="#sociallogins" data-custom-class="link">
                    HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </a>
                " below.
            </div>
            <div>
                All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
            </div>
            <div id="infouse">
                <strong>
                    2. HOW DO WE PROCESS YOUR INFORMATION?
                </strong>
            </div>
            <div>
                <div>
                    <strong>
                        <em>
                            In Short:&nbsp;
                        </em>
                    </strong>
                    <em>
                        We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                    </em>
                </div>
            </div>
            <div>
                <strong>
                    We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                </strong>
            </div>
            <ul>
                <li>
                    <strong>
                        To facilitate account creation and authentication and otherwise manage user accounts.&nbsp;
                    </strong>
                    We may process your information so you can create and log in to your account, as well as keep your account in working order.
                </li>
            </ul>
            <div>
                <div>
                    <ul>
                        <li>
                            <strong>
                                To respond to user inquiries/offer support to users.&nbsp;
                            </strong>
                            We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                        </li>
                    </ul>
                    <div>
                        <ul>
                            <li>
                                <strong>
                                    To send administrative information to you.&nbsp;
                                </strong>
                                We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                            </li>
                        </ul>
                        <div>
                            <div>
                                <div>
                                    <ul>
                                        <li>
                                            <strong>
                                                To request feedback.&nbsp;
                                            </strong>
                                            We may process your information when necessary to request feedback and to contact you about your use of our Services.
                                        </li>
                                    </ul>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <div>
                                                                <ul>
                                                                    <li>
                                                                        <strong>
                                                                            To administer prize draws and competitions.
                                                                        </strong>
                                                                        We may process your information to administer prize draws and competitions.
                                                                    </li>
                                                                </ul>
                                                                <ul>
                                                                    <li>
                                                                        <strong>
                                                                            To evaluate and improve our Services, products, marketing, and your experience.
                                                                        </strong>
                                                                        We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.
                                                                    </li>
                                                                </ul>
                                                                <div>
                                                                    <div>
                                                                        <div>
                                                                            <div>
                                                                                <div>
                                                                                    <div>
                                                                                        <ul>
                                                                                            <li>
                                                                                                <strong>
                                                                                                    To send updates on emails about events and information relating to CAMRU
                                                                                                </strong>
                                                                                                <strong>
                                                                                                    .
                                                                                                </strong>
                                                                                                We will use your email to inform you about upcoming events, event updates, and other computing students events
                                                                                            </li>
                                                                                        </ul>
                                                                                        <div id="legalbases">
                                                                                            <strong>
                                                                                                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
                                                                                            </strong>
                                                                                        </div>
                                                                                        <div>
                                                                                            <em>
                                                                                                <strong>
                                                                                                    In Short:&nbsp;
                                                                                                </strong>
                                                                                                We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
                                                                                            </em>
                                                                                        </div>
                                                                                        <div>
                                                                                            We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time. Click&nbsp;
                                                                                            <a href="#withdrawconsent" data-custom-class="link">
                                                                                                here
                                                                                            </a>
                                                                                            &nbsp;to learn more.
                                                                                        </div>
                                                                                        <div>
                                                                                            In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
                                                                                        </div>
                                                                                        <ul>
                                                                                            <li>
                                                                                                If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
                                                                                            </li>
                                                                                        </ul>
                                                                                        <ul>
                                                                                            <li>
                                                                                                For investigations and fraud detection and prevention
                                                                                            </li>
                                                                                        </ul>
                                                                                        <ul>
                                                                                            <li>
                                                                                                For business transactions provided certain conditions are met
                                                                                            </li>
                                                                                        </ul>
                                                                                        <ul>
                                                                                            <li>
                                                                                                If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim
                                                                                            </li>
                                                                                        </ul>
                                                                                        <ul>
                                                                                            <li>
                                                                                                For identifying injured, ill, or deceased persons and communicating with next of kin
                                                                                            </li>
                                                                                        </ul>
                                                                                        <ul>
                                                                                            <li>
                                                                                                If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
                                                                                            </li>
                                                                                        </ul>
                                                                                        <ul>
                                                                                            <li>
                                                                                                If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province
                                                                                            </li>
                                                                                        </ul>
                                                                                        <ul>
                                                                                            <li>
                                                                                                If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records
                                                                                            </li>
                                                                                        </ul>
                                                                                        <ul>
                                                                                            <li>
                                                                                                If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced
                                                                                            </li>
                                                                                        </ul>
                                                                                        <ul>
                                                                                            <li>
                                                                                                If the collection is solely for journalistic, artistic, or literary purposes
                                                                                            </li>
                                                                                        </ul>
                                                                                        <ul>
                                                                                            <li>
                                                                                                If the information is publicly available and is specified by the regulations
                                                                                            </li>
                                                                                        </ul>
                                                                                        <div id="whoshare">
                                                                                            <strong>
                                                                                                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                                                                                            </strong>
                                                                                        </div>
                                                                                        <div>
                                                                                            <strong>
                                                                                                <em>
                                                                                                    In Short:
                                                                                                </em>
                                                                                            </strong>
                                                                                            <em>
                                                                                                &nbsp;We may share information in specific situations described in this section and/or with the following third parties.
                                                                                            </em>
                                                                                        </div>
                                                                                        <div>
                                                                                            We may need to share your personal information in the following situations:
                                                                                        </div>
                                                                                        <ul>
                                                                                            <li>
                                                                                                <strong>
                                                                                                    Business Transfers.
                                                                                                </strong>
                                                                                                We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                                                                                            </li>
                                                                                        </ul>
                                                                                        <div>
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <strong>
                                                                                                        Affiliates.&nbsp;
                                                                                                    </strong>
                                                                                                    We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.
                                                                                                </li>
                                                                                            </ul>
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <strong>
                                                                                                        Business Partners.
                                                                                                    </strong>
                                                                                                    We may share your information with our business partners to offer you certain products, services, or promotions.
                                                                                                </li>
                                                                                            </ul>
                                                                                            <div>
                                                                                                <div>
                                                                                                    <div id="cookies">
                                                                                                        <strong>
                                                                                                            5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <strong>
                                                                                                            <em>
                                                                                                                In Short:
                                                                                                            </em>
                                                                                                        </strong>
                                                                                                        <em>
                                                                                                            &nbsp;We may use cookies and other tracking technologies to collect and store your information.
                                                                                                        </em>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                                                                                                    </div>
                                                                                                    <div id="sociallogins">
                                                                                                        <strong>
                                                                                                            6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <strong>
                                                                                                            <em>
                                                                                                                In Short:&nbsp;
                                                                                                            </em>
                                                                                                        </strong>
                                                                                                        <em>
                                                                                                            If you choose to register or log in to our services using a social media account, we may have access to certain information about you.
                                                                                                        </em>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
                                                                                                    </div>
                                                                                                    <div id="inforetain">
                                                                                                        <strong>
                                                                                                            7. HOW LONG DO WE KEEP YOUR INFORMATION?
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <strong>
                                                                                                            <em>
                                                                                                                In Short:&nbsp;
                                                                                                            </em>
                                                                                                        </strong>
                                                                                                        <em>
                                                                                                            We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
                                                                                                        </em>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                                                                                                    </div>
                                                                                                    <div id="infosafe">
                                                                                                        <strong>
                                                                                                            8. HOW DO WE KEEP YOUR INFORMATION SAFE?
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <strong>
                                                                                                            <em>
                                                                                                                In Short:&nbsp;
                                                                                                            </em>
                                                                                                        </strong>
                                                                                                        <em>
                                                                                                            We aim to protect your personal information through a system of organizational and technical security measures.
                                                                                                        </em>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                                                                                                    </div>
                                                                                                    <div id="privacyrights">
                                                                                                        <strong>
                                                                                                            9. WHAT ARE YOUR PRIVACY RIGHTS?
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <strong>
                                                                                                            <em>
                                                                                                                In Short:
                                                                                                            </em>
                                                                                                        </strong>
                                                                                                        <em>
                                                                                                            &nbsp;In some regions, such as Canada, you have rights that allow you greater access to and control over your personal information.&nbsp;You may review, change, or terminate your account at any time.
                                                                                                        </em>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "
                                                                                                        <a href="#contact" data-custom-class="link">
                                                                                                            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                                                                                                        </a>
                                                                                                        " below.
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        We will consider and act upon any request in accordance with applicable data protection laws.
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here:
                                                                                                        <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank" rel="noopener noreferrer" data-custom-class="link">
                                                                                                            https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                                                                                                        </a>
                                                                                                        .
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        If you are located in Switzerland, the contact details for the data protection authorities are available here:
                                                                                                        <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank" rel="noopener noreferrer" data-custom-class="link">
                                                                                                            https://www.edoeb.admin.ch/edoeb/en/home.html
                                                                                                        </a>
                                                                                                        .
                                                                                                    </div>
                                                                                                    <div id="withdrawconsent">
                                                                                                        <strong>
                                                                                                            <u>
                                                                                                                Withdrawing your consent:
                                                                                                            </u>
                                                                                                        </strong>
                                                                                                        If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "
                                                                                                        <a href="#contact" data-custom-class="link">
                                                                                                            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                                                                                                        </a>
                                                                                                        " below.
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <strong>
                                                                                                            <u>
                                                                                                                Opting out of marketing and promotional communications:
                                                                                                            </u>
                                                                                                        </strong>
                                                                                                        You can unsubscribe from our marketing and promotional communications at any time by By contacting one of the execs in CAMRU discord server, or by contacting us using the details provided in the section "
                                                                                                        <a href="#contact" data-custom-class="link">
                                                                                                            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                                                                                                        </a>
                                                                                                        " below. You will then be removed from the marketing lists. However, we may still communicate with you &mdash; for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <strong>
                                                                                                            Account Information
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        If you would at any time like to review or change the information in your account or terminate your account, you can:
                                                                                                    </div>
                                                                                                    <ul>
                                                                                                        <li>
                                                                                                            Contact us using the contact information provided.
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                    <div>
                                                                                                        Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <strong>
                                                                                                            <u>
                                                                                                                Cookies and similar technologies:
                                                                                                            </u>
                                                                                                        </strong>
                                                                                                        Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit
                                                                                                        <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" data-custom-class="link">
                                                                                                            http://www.aboutads.info/choices/
                                                                                                        </a>
                                                                                                        .
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        If you have questions or comments about your privacy rights, you may email us at contact@mtroyal.ca.
                                                                                                    </div>
                                                                                                    <div id="DNT">
                                                                                                        <strong>
                                                                                                            10. CONTROLS FOR DO-NOT-TRACK FEATURES
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
                                                                                                    </div>
                                                                                                    <div id="caresidents">
                                                                                                        <strong>
                                                                                                            11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <strong>
                                                                                                            <em>
                                                                                                                In Short:&nbsp;
                                                                                                            </em>
                                                                                                        </strong>
                                                                                                        <em>
                                                                                                            Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
                                                                                                        </em>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
                                                                                                    </div>
                                                                                                    <div id="policyupdates">
                                                                                                        <strong>
                                                                                                            12. DO WE MAKE UPDATES TO THIS NOTICE?
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <em>
                                                                                                            <strong>
                                                                                                                In Short:&nbsp;
                                                                                                            </strong>
                                                                                                            Yes, we will update this notice as necessary to stay compliant with relevant laws.
                                                                                                        </em>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
                                                                                                    </div>
                                                                                                    <div id="contact">
                                                                                                        <strong>
                                                                                                            13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        If you have questions or comments about this notice, you may email us at contact@mtroyal.ca&nbsp;or by post to:
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        Computing Alliance of Mount Royal University
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        4825 Mt Royal Gate SW
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        Calgary, Alberta T3E 6K6
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        Canada
                                                                                                    </div>
                                                                                                    <div id="request">
                                                                                                        <strong>
                                                                                                            14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                                                                                                        </strong>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it.&nbsp;To request to review, update, or delete your personal information, please visit: camru.ca/Contact.
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div>
                                                                                                    This privacy policy was created using Termly's
                                                                                                    <a href="https://termly.io/products/privacy-policy-generator/">
                                                                                                        Privacy Policy Generator
                                                                                                    </a>
                                                                                                    .
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}


export default PrivacyPolicy;