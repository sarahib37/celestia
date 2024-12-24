import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    h2, h3{
        font-family: Ruberoid;
        font-weight: 500; 
    }

    h2{
        font-size: 1.8em;  
    }

    h3{
        font-size: 1.5em;
    }

    li{
        border-top: 1.5px solid black;
        padding: 3em 0;
        font-size: .9em;
    }
`

function Terms3() {
  return (
    <Container>
        <div>
            <h2>1. WHO MAY USE THE SERVICES</h2>
            <p>In order to use the Services, you must be thirteen 13 years of age or older, not be a Prohibited Person, and not have been previously suspended or removed from the Services. A “Prohibited Person” is any person, entity or body that is (a) listed on any U.S., EU (including its Member States) or UK list of prohibited or restricted parties, including the U.S. Treasury Department's list of Specially Designated Nationals, the U.S. Department of Commerce Denied Persons List Entity List, the EU Consolidated List of persons, groups and entities subject to financial sanctions or the UK Consolidated List of Financial Sanctions Targets, (b) located or organized in any U.S. embargoed countries or any country that has been designated by the U.S. Government as a “terrorist supporting” country (currently, the Crimea region of Ukraine, Cuba, Iran, North Korea, Syria, the so-called Donetsk People’s Republic and the so-called Luhansk People’s Republic), or (c) owned or controlled by such persons or entities listed in (a)-(b). By using the Services, you represent and warrant that you meet the foregoing requirements and will not be using the Services for any illegal activity or to engage in the prohibited activities in Section 5.2. The Company reserves the right to change, modify, or impose additional restrictions with respect to Prohibited Persons at its sole discretion without prior notice.</p>
        </div>

        <div>
            <h2>2. THE SERVICES</h2>
            <h3>2.1 Updates; Monitoring</h3>
            <p>We may make any improvement, modifications or updates to the Services, including but not limited to changes and updates to the underlying software, infrastructure, security protocols, technical configurations or service features (the “Updates”) from time to time. Your continued access and use of the Services are subject to such Updates and you shall accept any patches, system upgrades, bug fixes, feature modifications, or other maintenance work that arise out of such Updates. We are not liable for any failure by you to accept and use such Updates in the manner specified or required by us. Although the Company is not obligated to monitor access to or participation in the Services, it has the right to do so for the purpose of operating the Services, to ensure compliance with the Terms and to comply with applicable law or other legal requirements.</p>
            <h3>2.2 Wallets</h3>
            <p>The Services may require you to connect your own third-party self-custodial digital wallets (“Wallets”), including in connection with your use of Testnets (as defined below). A self-custodial Wallet means we do not own or control your Wallet. You are solely responsible for keeping your Wallet and any private keys necessary to decrypt your Wallet secure and you should never share your Wallet seed phrase or private keys with anyone else via the Services. We have no ability to help you access or recover your private keys for your Wallet. By using such Wallets to conduct transactions via the Services, you agree that you are governed by the terms of service and privacy policy for the applicable Wallets, and that the Company has no responsibility or liability to you in any way arising from your use of such third-party Wallets, including for any security failures or other errors or failures of such Wallets. We reserve the right to restrict any Wallet addresses from interacting with the Services for any reason, including to ensure legal compliance.</p>
        </div>

        <div>
            <h2>3. TESTNETS</h2>
            <h3>3.1 Purpose and Participation</h3>
            <p>The Website may enable you to interact with deployments of the Celestia Protocol in testnet environments (“Testnets”), including but not limited to the Mamaki Testnet, the Arabica Testnet, and the Mocha Testnet. Testnets are designed to enable the community of Celestia Protocol users to understand the protocol’s functionality and explore potential improvements to the operational experience, security, and design of the Celestia Protocol. The Testnets are operated and maintained by the community of Celestia Protocol users and the Testnets are not part of the Services. YOUR PARTICIPATION IN ANY TESTNET IS ENTIRELY VOLUNTARY.</p>
            <h3>3.2 Duration</h3>
            <p>The availability of a Testnet is solely subject to the decision and activities of the community of Celestia Protocol users. The Company has no ability to and bears no responsibility to commence, terminate, or modify a Testnet.</p>
            <h3>3.3 No Monetary Value</h3>
            <p>In your use of a Testnet, you may accumulate “Testnet Tokens,” such as through a faucet, which are not, and shall never convert to or accrue to become any other tokens or virtual assets outside of the respective Testnet on which the Testnet Tokens were issued. Testnet Tokens are virtual items with no monetary value. Testnet Tokens do not constitute any currency or property of any type and are not redeemable, refundable, or eligible for any fiat or virtual currency or anything else of value. Testnet Tokens are not transferable between users outside of the respective Testnet on which the Testnet Tokens were issued, and you may not attempt to sell, trade, or transfer any Testnet Tokens outside of that respective Testnet, or obtain any manner of credit using any Testnet Tokens. Any attempt to sell, trade, or transfer any Testnet Tokens outside of the respective Testnet will be null and void. Testnet Tokens will not be converted into any future rewards offered by the Company.</p>
        </div>

        <div>
            <h2>4. LOCATION OF OUR PRIVACY POLICY</h2>
            <h3>4.1 Privacy Policy</h3>
            <p>Our Privacy Policy describes how we handle the information you provide to us when you use the Services. For an explanation of our privacy practices, please visit our Privacy Policy located at https://celestia.org/privacy. If a specific Service is governed by a separate set of terms, those terms may also contain privacy-related information.</p>
        </div>

        <div>
            <h2>5. RIGHTS WE GRANT YOU</h2>
            <h3>5.1 Right to Use Services</h3>
            <p>We hereby permit you to use the Services for your personal non-commercial use only, provided that you comply with these Terms in connection with all such use. If any software, content or other materials owned or controlled by us are distributed to you as part of your use of the Services, we hereby grant you, a personal, non-assignable, non-sublicensable, non-transferrable, and non-exclusive right and license to access and display such software, content and materials provided to you as part of the Services, in each case for the sole purpose of enabling you to use the Services as permitted by these Terms. Your access and use of the Services may be interrupted from time to time for any of several reasons, including, without limitation, the malfunction of equipment, periodic updating, maintenance or repair of the Service or other actions that the Company, in its sole discretion, may elect to take.</p>
            <h3>5.2 Restrictions On Your Use of the Services</h3>
            <p>You may not do any of the following in connection with your use of the Services, unless applicable laws or regulations prohibit these restrictions or you have our written permission to do so (such as pursuant to one or more open source licenses that we may apply to any part of the Services):</p>
            <ol>
                <li>download, modify, copy, distribute, transmit, display, perform, reproduce, duplicate, publish, license, create derivative works from, or offer for sale any information contained on, or obtained from or through, the Services, except for temporary files that are automatically cached by your web browser for display purposes, or as otherwise expressly permitted in these Terms;</li>
                <li>duplicate, decompile, reverse engineer, disassemble or decode the Services (including any underlying idea or algorithm), or attempt to do any of the same;</li>
                <li>use, reproduce or remove any copyright, trademark, service mark, trade name, slogan, logo, image, or other proprietary notation displayed on or through the Services;</li>
                <li>use automation software (bots), hacks, modifications (mods) or any other unauthorized third-party software designed to modify the Services or impersonate a real-person or to exaggerate or misrepresent your engagement with the Services;</li>
                <li>exploit the Services for any commercial purpose, including without limitation communicating or facilitating any commercial advertisement or solicitation;</li>
                <li>access or use the Services in any manner that could disable, overburden, damage, disrupt or impair the Services or interfere with any other party’s access to or use of the Services or use any device, software or routine that causes the same;</li>
                <li>attempt to gain unauthorized access to, interfere with, damage or disrupt the Services, or the computer systems or networks connected to the Services;</li>
                <li>circumvent, remove, alter, deactivate, degrade or thwart any technological measure or content protections of the Services;</li>
                <li>use any device, process, or software to manipulate or disrupt anyone else’s use of the Services, including but not limited to posting or distributing commercial spam; attempting to artificially inflate your engagement with the Services; engaging in coordinated harmful activity to encourage or promote violations of these Terms; or mass-registering for accounts related to or provided by the Services;</li>
                <li>introduce any viruses, trojan horses, worms, logic bombs or other materials that are malicious or technologically harmful into our systems;</li>
                <li>use the Services for illegal, harassing, unethical, or disruptive purposes;</li>
                <li>violate any applicable law or regulation in connection with your access to or use of the Services; or</li>
                <li>access or use the Services in any way not expressly permitted by these Terms.</li>
            </ol>
        </div>

        <div>
            <h2>6. OWNERSHIP AND CONTENT</h2>
            <h3>6.1 Ownership of the Services</h3>
            <p>The Services, including their “look and feel” (e.g., text, graphics, images, logos), proprietary content, information and other materials, are protected under copyright, trademark and other intellectual property laws. You agree that the Company and/or its licensors own all right, title and interest in and to the Services (including any and all intellectual property rights therein) and you agree not to take any action(s) inconsistent with such ownership interests. We and our licensors reserve all rights in connection with the Services and its content including, without limitation, the exclusive right to create derivative works.</p>
            <h3>6.2 Ownership of Trademarks</h3>
            <p>The Company’s name, the Company’s logo and all related names, logos, product and service names, designs and slogans are trademarks of the Company or its affiliates or licensors. Other names, logos, product and service names, designs and slogans that appear on the Services are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by us.</p>
            <h3>6.3 Ownership of Feedback</h3>
            <p>We welcome feedback, comments and suggestions for improvements to the Services (“Feedback”). You acknowledge and expressly agree that any contribution of Feedback does not and will not give or grant you any right, title or interest in the Services or in any such Feedback. All Feedback becomes the sole and exclusive property of the Company, and the Company may use and disclose Feedback in any manner and for any purpose whatsoever without further notice or compensation to you and without retention by you of any proprietary or other right or claim. You hereby assign to the Company any and all right, title and interest (including, but not limited to, any patent, copyright, trade secret, trademark, show-how, know-how, moral rights and any and all other intellectual property right) that you may have in and to any and all Feedback.</p>
        </div>

        <div>
            <h2>7. THIRD-PARTY SERVICES AND MATERIALS</h2>
            <h3>7.1 Use of Third-Party Materials in the Services</h3>
            <p>Certain Services may display, include or make available content, data, information, applications or materials from third parties (“Third-Party Materials”) or provide links to certain third-party websites. By using the Services, you acknowledge and agree that the Company is not responsible for examining or evaluating the content, accuracy, completeness, availability, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect of such Third-Party Materials or websites. We do not warrant or endorse and do not assume and will not have any liability or responsibility to you or any other person for any third-party services, Third-Party Materials or third-party websites, or for any other materials, products, or services of third parties. Third-Party Materials and links to other websites are provided solely as a convenience to you.</p>
            <h3>7.2 Use of Third-Party Software in the Services</h3>
            <p>The Services may include Third-Party software components that are subject to open source and/or pass-through commercial licenses and/or notices (“Third-Party Software” and “Third-Party Software Terms and Notices”, respectively). You acknowledge that your use of the Services may be also governed by such Third-Party Software Terms and Notices, and that to the extent of any conflict between these Terms and any Third-Party Software Terms and Notices, the latter shall control. Any undertakings, representations, warranties, guarantees, conditions, indemnities or other commitments made by the Company in these Terms concerning the Services (if any), are made by the Company and not by any authors, licensors, or suppliers of, or contributors to, such Third-Party Software. Notwithstanding the foregoing sentence or anything in these Terms to the contrary, the Company does not make any representation, warranty, guarantee, or condition, and does not undertake any defense or indemnification, with respect to any Third-Party Software.</p>
        </div>

        <div>
            <h2>8. DISCLAIMERS, LIMITATIONS OF LIABILITY AND INDEMNIFICATION</h2>
            <h3>8.1 Disclaimers</h3>
            <ol>
                <li>
                Your access to and use of the Services are at your own risk. You understand and agree that the Services are provided to you on an “AS IS” and “AS AVAILABLE” basis. Without limiting the foregoing, to the maximum extent permitted under applicable law, the Company, its parents, affiliates, related companies, officers, directors, employees, agents, representatives, partners and licensors (the “Company Entities”) DISCLAIM ALL REPRESENTATIONS, WARRANTIES AND CONDITIONS, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION ANY REPRESENTATIONS OR WARRANTIES RELATING TO TITLE, NON-INFRINGEMENT, MERCHANTABILITY, USAGE, QUALITY, PERFORMANCE, SUITABILITY OR FITNESS OF THE SERVICES FOR ANY PARTICULAR PURPOSE, OR AS TO THE ACCURACY, QUALITY, SEQUENCE, RELIABILITY, WORKMANSHIP OR TECHNICAL CODING THEREOF, OR THE ABSENCE OF ANY DEFECTS THEREIN WHETHER LATENT OR PATENT. The Company Entities make no warranty or representation and disclaim all responsibility and liability for: (a) the completeness, accuracy, availability, timeliness, security or reliability of the Services; (b) any harm to your computer system, corrupted Wallet files, loss of data, or other harm that results from your access to or use of the Services; (c) the operation or compatibility with any other application or any particular system or device; and (d) whether the Services will meet your requirements or be available on an uninterrupted, secure or error-free basis. No advice or information, whether oral or written, obtained from the Company Entities or through the Services, will create any warranty or representation not expressly made herein.
                </li>

                <li>THE LAWS OF CERTAIN JURISDICTIONS, INCLUDING NEW JERSEY, DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</li>

                <li>YOU ACKNOWLEDGE AND AGREE THAT THIS SECTION 8.1 IS AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN YOU AND THE COMPANY.</li>
            </ol>
            <h3>8.2 Limitations of Liability</h3>
            <p>TO THE EXTENT NOT PROHIBITED BY LAW, YOU AGREE THAT IN NO EVENT WILL THE COMPANY ENTITIES BE LIABLE (A) FOR DAMAGES OF ANY KIND, INCLUDING INDIRECT, SPECIAL, EXEMPLARY, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, LOSS OF USE, DATA OR PROFITS, BUSINESS INTERRUPTION OR ANY OTHER DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE SERVICES), HOWEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, WHETHER UNDER THESE TERMS OR OTHERWISE ARISING IN ANY WAY IN CONNECTION WITH THE SERVICES OR THESE TERMS AND WHETHER IN CONTRACT, STRICT LIABILITY OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) EVEN IF THE COMPANY ENTITIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE, OR (B) FOR ANY OTHER CLAIM, DEMAND OR DAMAGES WHATSOEVER RESULTING FROM OR ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE DELIVERY, USE OR PERFORMANCE OF THE SERVICES. SOME JURISDICTIONS (SUCH AS THE STATE OF NEW JERSEY) DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE EXCLUSION OR LIMITATION MAY NOT APPLY TO YOU. THE COMPANY ENTITIES’ TOTAL LIABILITY TO YOU FOR ANY DAMAGES FINALLY AWARDED SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100.00). THE FOREGOING LIMITATIONS WILL APPLY EVEN IF THE ABOVE STATED REMEDY FAILS OF ITS ESSENTIAL PURPOSE. Some jurisdictions laws do not allow the exclusion or limitation of incidental or consequential damages, or of other damages, and to the extent applicable to you, such exclusions and limitations may not apply but will apply to the maximum extent permitted by applicable law. YOU ACKNOWLEDGE AND AGREE THAT THIS SECTION 8.2 IS AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN YOU AND THE COMPANY.</p>
            <h3>8.3 Assumption of Risks</h3>
            <ol>
                <li>By using the Services, you represent that you have sufficient knowledge and experience in business and financial matters, including a sufficient understanding of blockchain or cryptographic tokens and technologies and other digital assets, storage mechanisms (such as Wallets), blockchain-based software systems, and blockchain technology, to be able to assess and evaluate the risks and benefits of the Services contemplated hereunder, and will bear the risks thereof, including loss of all amounts paid, and the risk that any tokens you receive as a result of your use of the Services may have little or no value. You acknowledge and agree that there are risks associated with interacting with cryptographic tokens and using blockchain technology. These include, but are not limited to, risk of losing access to cryptocurrency due to loss of private key(s), custodial error or purchaser error, risk of mining or blockchain attacks, risk of hacking and security weaknesses, risk of unfavorable regulatory intervention in one or more jurisdictions, risk related to token taxation, risk of personal information disclosure, risk of uninsured losses, volatility risks, and unanticipated risks.</li>
                <li>The regulatory regime governing blockchain technologies and cryptographic tokens is uncertain, and new regulations or policies may materially adversely affect the potential utility or value of any tokens you receive as a result of your use of the Services. There also exists the risks of new taxation of the purchase or sale of tokens.</li>
                <li>There are risks associated with using blockchains and cryptographic tokens, including, but not limited to, the risk of failures of hardware, software, and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your Wallet or elsewhere. The Company is not responsible for any such risks, however caused.</li>
                <li>We do not control the Celestia Protocol, any blockchains or other networks that deploy the Celestia Protocol, or any software that interacts with the Celestia Protocol. The Company is not responsible for changes, upgrades, or forks of the Celestia Protocol or any damage resulting from the foregoing, however caused.</li>
            </ol>
            <h3>8.4 Indemnification</h3>
            <p>By entering into these Terms and accessing or using the Services, you agree that you shall defend, indemnify and hold the Company Entities harmless from and against any and all claims, costs, damages, losses, liabilities and expenses (including attorneys’ fees and costs) incurred by the Company Entities arising out of or in connection with: (a) your violation or breach of any term of these Terms or any applicable law or regulation, including any such violation or breach related to any rewards that may be available as a result of your participation in a program maintained by us or our affiliates; (b) your violation of any rights of any Third-Party; (c) your misuse of the Services; (d) your negligence or wilful misconduct. If you are obligated to indemnify any Company Entity hereunder, then you agree that Company (or, at its discretion, the applicable Company Entity) will have the right, in its sole discretion, to control any action or proceeding and to determine whether Company wishes to settle, and if so, on what terms, and you agree to fully cooperate with Company in the defense or settlement of such claim.</p>
        </div>

        <div>
            <h2>9. ARBITRATION AND CLASS ACTION WAIVER</h2>
            <h3>9.1 PLEASE READ THIS SECTION CAREFULLY – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT AND TO HAVE A JURY HEAR YOUR CLAIMS. IT CONTAINS PROCEDURES FOR MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.</h3>
            <h3>9.2 Informal Process First</h3>
            <p>You and the Company agree that in the event of any dispute between you and the Company Entities, either party will first contact the other party and make a good faith sustained effort to resolve the dispute before resorting to more formal means of resolution, including without limitation, any court action, after first allowing the receiving party 30 days in which to respond. Both you and the Company agree that this dispute resolution procedure is a condition precedent which must be satisfied before initiating any arbitration against the other party.</p>
            <h3>9.3 Arbitration Agreement and Class Action Waiver</h3>
            <p>After the informal dispute resolution process, any remaining dispute, controversy, or claim (collectively, “Claim”) relating in any way to the Company’s services and/or products, including the Services, and any use or access or lack of access thereto, will be resolved by arbitration, including threshold questions of arbitrability of the Claim. You and the Company agree that any Claim will be settled by final and binding arbitration, using the English language, administered in accordance with the Liechtenstein Arbitration Rules (LIS) of the Liechtenstein Chamber of Commerce and Industry. The seat of the arbitral tribunal will be Vaduz, Liechtenstein and the arbitral proceeding will be conducted in English. The arbitrator will apply applicable substantive law consistent with the laws of the Principality of Liechtenstein. Judgment on the arbitration award may be entered in any court that has jurisdiction. Any arbitration under these Terms will take place on an individual basis – class arbitrations and class actions are not permitted. You understand that by agreeing to these Terms, you and the Company are each waiving the right to trial by jury or to participate in a class action or class arbitration.</p>
            <h3>9.4 Exceptions</h3>
            <p>Notwithstanding the foregoing, you and the Company agree that the following types of disputes will be resolved in a court of proper jurisdiction:</p>
            <ol>
                <li>disputes or claims within the jurisdiction of a small claims court consistent with the jurisdictional and dollar limits that may apply, as long as it is brought and maintained as an individual dispute and not as a class, representative, or consolidated action or proceeding;</li>
                <li>disputes or claims where the sole form of relief sought is injunctive relief (including public injunctive relief); or</li>
                <li>intellectual property disputes.</li>
            </ol>
            <h3>9.5 Costs of Arbitration</h3>
            <p>Payment of all filing, administration, and arbitrator costs and expenses will be governed by LIS rules, except that if you demonstrate that any such costs and expenses owed by you under those rules would be prohibitively more expensive than a court proceeding, the Company will pay the amount of any such costs and expenses that the arbitrator determines are necessary to prevent the arbitration from being prohibitively more expensive than a court proceeding (subject to possible reimbursement as set forth below).</p>
            <p>Fees and costs may be awarded as provided pursuant to applicable law. If the arbitrator finds that either the substance of your claim or the relief sought in the demand is frivolous or brought for an improper purpose, then the payment of all fees will be governed by the LIS rules. In that case, you agree to reimburse the Company for all monies previously disbursed by it that are otherwise your obligation to pay under the applicable rules. If you prevail in the arbitration and are awarded an amount that is less than the last written settlement amount offered by the Company before the arbitrator was appointed, the Company will pay you the amount it offered in settlement. The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees or expenses at any time during the proceeding and upon request from either party made within 14 days of the arbitrator’s ruling on the merits.</p>
            <h3>9.6 WAIVER OF RIGHT TO BRING CLASS ACTION AND REPRESENTATIVE CLAIMS</h3>
            <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AND THE COMPANY EACH AGREE THAT ANY PROCEEDING TO RESOLVE ANY DISPUTE, CLAIM, OR CONTROVERSY WILL BE BROUGHT AND CONDUCTED ONLY IN THE RESPECTIVE PARTY’S INDIVIDUAL CAPACITY AND NOT AS PART OF ANY CLASS (OR PURPORTED CLASS), CONSOLIDATED, MULTIPLE-PLAINTIFF, OR REPRESENTATIVE ACTION OR PROCEEDING (“CLASS ACTION”). YOU AND THE COMPANY AGREE TO WAIVE THE RIGHT TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS ACTION. YOU AND THE COMPANY EXPRESSLY WAIVE ANY ABILITY TO MAINTAIN A CLASS ACTION IN ANY FORUM. IF THE DISPUTE IS SUBJECT TO ARBITRATION, THE ARBITRATOR WILL NOT HAVE THE AUTHORITY TO COMBINE OR AGGREGATE CLAIMS, CONDUCT A CLASS ACTION, OR MAKE AN AWARD TO ANY PERSON OR ENTITY NOT A PARTY TO THE ARBITRATION. FURTHER, YOU AND THE COMPANY AGREE THAT THE ARBITRATOR MAY NOT CONSOLIDATE PROCEEDINGS FOR MORE THAN ONE PERSON’S CLAIMS, AND IT MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A CLASS ACTION. FOR THE AVOIDANCE OF DOUBT, HOWEVER, YOU CAN SEEK PUBLIC INJUNCTIVE RELIEF TO THE EXTENT AUTHORIZED BY LAW AND CONSISTENT WITH THE EXCEPTIONS CLAUSE ABOVE.</p>
            <p>IF THIS CLASS ACTION WAIVER IS LIMITED, VOIDED, OR FOUND UNENFORCEABLE, THEN, UNLESS THE PARTIES MUTUALLY AGREE OTHERWISE, THE PARTIES’ AGREEMENT TO ARBITRATE SHALL BE NULL AND VOID WITH RESPECT TO SUCH PROCEEDING SO LONG AS THE PROCEEDING IS PERMITTED TO PROCEED AS A CLASS ACTION. IF A COURT DECIDES THAT THE LIMITATIONS OF THIS PARAGRAPH ARE DEEMED INVALID OR UNENFORCEABLE, ANY PUTATIVE CLASS, PRIVATE ATTORNEY GENERAL, OR CONSOLIDATED OR REPRESENTATIVE ACTION MUST BE BROUGHT IN A COURT OF PROPER JURISDICTION AND NOT IN ARBITRATION.</p>
            <h3>9.7 Timeline for Making a Claim</h3>
            <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ANY CLAIM OR CAUSE OF ACTION ARISING OUT OF, OR RELATED TO, THESE TERMS MUST BE FILED WITHIN 1 YEAR AFTER SUCH CLAIM OR CAUSE OF ACTION AROSE, OR ELSE YOU AGREE THAT SUCH CLAIM OR CAUSE OF ACTION WILL BE PERMANENTLY BARRED.</p>
        </div>

        <div>
            <h2>10. ADDITIONAL PROVISIONS</h2>
            <h3>10.1 Updating These Terms</h3>
            <p>We may modify these Terms from time to time in which case we will update the “Last Revised” date at the top of these Terms. If we make changes that are material, we will use reasonable efforts to attempt to notify you, such as by placing a prominent notice on the first page of the Website. However, it is your sole responsibility to review these Terms from time to time to view any such changes. The updated Terms will be effective as of the time of posting, or such later date as may be specified in the updated Terms. Your continued access or use of the Services after the modifications have become effective will be deemed your acceptance of the modified Terms. No amendment shall apply to a dispute for which an arbitration has been initiated prior to the change in Terms.</p>
            <h3>10.2 Notices</h3>
            <p>You agree that the Company may send you notices by email, physical mail, or by posting on or through the Website.</p>
            <h3>10.3 Termination of License</h3>
            <p>If you breach any of the provisions of these Terms, all licenses granted to you by the Company will terminate automatically. All sections which by their nature should survive the termination of these Terms shall continue in full force and effect subsequent to and notwithstanding any termination of these Terms by the Company or you. Termination will not limit any of the Company’s other rights or remedies at law or in equity.</p>
            <h3>10.4 Injunctive Relief</h3>
            <p>You agree that a breach of these Terms will cause irreparable injury to the Company for which monetary damages would not be an adequate remedy and the Company shall be entitled to equitable relief in addition to any remedies it may have hereunder or at law without a bond, other security or proof of damages.</p>
            <h3>10.5 California Residents</h3>
            <p>If you are a California resident, in accordance with Cal. Civ. Code § 1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at (800) 952-5210.</p>
            <h3>10.6 Export Laws</h3>
            <p>You agree that you will not export or re-export, directly or indirectly, the Services and/or other information or materials provided by the Company hereunder, to any country for which the United States or any other relevant jurisdiction requires any export license or other governmental approval at the time of export without first obtaining such license or approval. In particular, but without limitation, the Services may not be exported or re-exported (a) into any U.S. embargoed countries or any country that has been designated by the U.S. Government as a “terrorist supporting” country, or (b) to anyone listed on any U.S. Government list of prohibited or restricted parties, including the U.S. Treasury Department’s list of Specially Designated Nationals or the U.S. Department of Commerce Denied Persons List or Entity List. By using the Services, you represent and warrant that you are not located in any such country or on any such list. You are responsible for and hereby agree to comply at your sole expense with all applicable United States export laws and regulations.</p>
            <h3>10.7 Force Majeure</h3>
            <p>We will not be liable or responsible to you, nor be deemed to have defaulted under or breached these Terms, for any failure or delay in fulfilling or performing any of our obligations under these Terms or in providing the Services, when and to the extent such failure or delay is caused by or results from any events beyond our ability to control, including acts of God, flood, fire, earthquake, epidemics, pandemics, tsunami, explosion, war, invasion, hostilities (whether war is declared or not), terrorist threats or acts, riot or other civil unrest, government order, law, or action, embargoes or blockades, strikes, labor stoppages or slowdowns or other industrial disturbances, shortage of adequate or suitable Internet connectivity, telecommunication breakdown or shortage of adequate power or electricity, and other similar events beyond our control.</p>
            <h3>10.8 Miscellaneous</h3>
            <p>If any provision of these Terms shall be unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions. These Terms and the licenses granted hereunder may be assigned by the Company but may not be assigned by you without the prior express written consent of the Company. No waiver by either party of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent breach or default. The section headings used herein are for reference only and shall not be read to have any legal effect. The Services are operated by us in Liechtenstein. Those who choose to access the Services from locations outside Liechtenstein do so at their own initiative and are responsible for compliance with applicable local laws. These Terms are governed by the laws of the Principality of Liechtenstein District Court and any appellate court from any such court, and the proper venue for any disputes arising out of or relating to any of the same will be the arbitration venue set forth in Section 9, or if arbitration does not apply, then the aforementioned Liechtenstein courts.</p>
            <h3>10.9 How to Contact Us</h3>
            <p>You may contact us regarding the Services or these Terms at: Pradafant 11, 9490 Vaduz, Principality of Liechtenstein, or by e-mail at legal@celestia.org.</p>
        </div>
    </Container>
  )
}

export default Terms3