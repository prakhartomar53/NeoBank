import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai"
function Step1() {
    const [step, setstep] = useState(2);
    const UserData = {
        aadharNumber: "",
        dob: "",
        gender: "",
        Phone: "",
        Email: "",
        PAN: "",
        nationality: "",
        fathersName: "",
        mothersName: "",
        pincode: "",
        state: "",
        district: "",
        annualIncone: 0,
        maritalStatus: ""
    }
    const [formData, setformData] = useState(UserData)
    const [aadharvalue, setaadharvalue] = useState("");
    const nextStep = (e) => {
        setaadharvalue("")
        e.preventDefault()

        setstep(step + 1);
    }
    function prevStep() {
        setaadharvalue("")

        setstep(step - 1)
    }
    useEffect(() => {
        prevStep();
    }, []);

    const handleInputData = input => e => {
        console.log(e);
        const { value } = e.target;

        setformData(prevState => ({
            ...prevState,
            [input]: value
        }));

    }
    const handleChange = event => {
        var result = event.target.value.replace(/\D/g, '');
        setaadharvalue(result);
    }
    const [pannumber, setpannumber] = useState("");
    const [fname, setfname] = useState("")
    const [mname, setmname] = useState("")
    const [lname, setlname] = useState("")
    const FnameToUpperCase = e => {
        const result = e.target.value.toUpperCase();
        setfname(result);
    }
    const MnameToUpperCase = e => {
        const result = e.target.value.toUpperCase();
        setmname(result);
    }
    const LnameToUpperCase = e => {
        const result = e.target.value.toUpperCase();
        setlname(result);
    }
    const panToUpperCase = e => {
        const result = e.target.value.toUpperCase();
        setpannumber(result);
    }
    switch (step) {
        case 1:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Make Sure Your Aadhaar is connected with your PAN.
                            PAN authentication will be entertained through Aadhaar only.
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <div className="aadharentry">
                            <label className="label">
                                Aadhar Number*
                            </label>
                            <input className="form-input" type={"text"} name="aadharNumber" placeholder="Enter Your Aadhar Number" value={aadharvalue} onChange={(e) => handleChange(e) && handleInputData(e)} maxLength={"12"} minLength={"12"} required />
                        </div>
                        <div style={{ textAlign: "center", padding: "5%" }}>
                            <Button className="aadharsubmit">Validate Aadhar</Button>
                        </div>
                        <div className="nextbuttonform">
                            <div style={{ margin: "auto", marginLeft: "45%" }}>{step}/8</div>
                            <Button style={{ backgroundColor: "#48842c", width: "30%", float: "right" }} onClick={e => nextStep(e)}>Next<AiFillCaretRight /></Button>
                        </div>
                    </div>
                </>
            )
        case 2:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <form method="post" >

                            <div className="aadharentry">
                                <label className="label">
                                    PAN*
                                </label>
                                <input className="form-input " type={"text"} name="PAN" placeholder="Enter Your Pan Number" value={pannumber} onChange={(e) => panToUpperCase(e)} maxLength={"10"} minLength={"10"} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Mobile Number*
                                </label>
                                <input className="form-input" type={"text"} name="Phone" placeholder="Enter Your Mobile Number" value={aadharvalue} onChange={(e) => handleChange(e) && handleInputData(e)} maxLength={"10"} minLength={"10"} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Email*
                                </label>
                                <input className="form-input" type={"Email"} name="Email" placeholder="Email" onChange={e => handleInputData(e)} required />
                            </div>
                            <div className="nextbuttonform">

                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStep(e)}><AiFillCaretLeft /> Back</Button>
                                <div style={{ margin: "auto" }}>
                                    {step}/8
                                </div>
                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextStep(e)}>Next <AiFillCaretRight /></Button>
                            </div>
                        </form>

                    </div>
                </>
            )
        case 3:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Make sure you fill the details as per your Aadhaar Card details to have a hassle free banking experience.
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <form method="post" >
                            <div className="aadharentry">
                                <label className="label">
                                    First Name*
                                </label>
                                <input className="form-input " type={"text"} name="fname" placeholder="Enter Your First Name" value={fname} onChange={(e) => FnameToUpperCase(e)} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Middle Name
                                </label>
                                <input className="form-input" type={"text"} name="mname" placeholder="Enter Your Middle Name" value={mname} onChange={(e) => MnameToUpperCase(e) && handleInputData(e)} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Last Name*
                                </label>
                                <input className="form-input" type={"text"} name="lname" placeholder="Enter Your Last Name" value={lname} onChange={e => LnameToUpperCase(e) && handleInputData(e)} required />
                            </div>
                            <div className="nextbuttonform">

                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStep(e)}><AiFillCaretLeft /> Back</Button>
                                <div style={{ margin: "auto" }}>
                                    {step}/8
                                </div>
                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextStep(e)}>Next <AiFillCaretRight /></Button>
                            </div>
                        </form>

                    </div>
                </>

            )
        case 4:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Make sure you fill the details as per your Aadhaar Card details to have a hassle free banking experience.
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <form method="post" >
                            <div className="aadharentry">
                                <label className="label">
                                    DOB*
                                </label>
                                <input className="form-input " type={"date"} name="dob" onChange={(e) => handleInputData(e)} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Gender
                                </label>
                                <select className="form-input" type={"text"} name="gender" placeholder="Enter Your Middle Name" onChange={(e) => handleInputData(e)} required>
                                    <option className="form-input" id="0" selected>Gender</option>
                                    <option id="1" >Male</option>
                                    <option id="2">Female</option>
                                    <option id="3">Transgender</option>
                                    <option id="4">Prefer Not to Say</option>

                                </select>
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Nationality*
                                </label>
                                <select className="form-input" type={"text"} name="Nationality" placeholder="Nationality" value={lname} onChange={e => LnameToUpperCase(e) && handleInputData(e)} required>
                                    <option id="0" selected>Nationality</option>
                                    <option id="1">Indian</option>
                                    <option id="2">Others..</option>
                                </select>
                            </div>
                            <div className="nextbuttonform">

                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStep(e)}><AiFillCaretLeft /> Back</Button>
                                <div style={{ margin: "auto" }}>
                                    {step}/8
                                </div>
                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextStep(e)}>Next <AiFillCaretRight /></Button>
                            </div>
                        </form>

                    </div>
                </>
            )
        case 5:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Make sure you fill the details as per your Aadhaar Card details to have a hassle free banking experience.
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <form method="post" >
                            <div className="aadharentry">
                                <label className="label">
                                    Father's Name*
                                </label>
                                <input className="form-input " type={"text"} name="FatherName" placeholder="Enter Your Father's Name" value={fname} onChange={(e) => FnameToUpperCase(e)} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Mother's Name
                                </label>
                                <input className="form-input" type={"text"} name="MotherName" placeholder="Enter Your Mother's Name" value={mname} onChange={(e) => MnameToUpperCase(e) && handleInputData(e)} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Mother's Maiden Name*
                                </label>
                                <input className="form-input" type={"text"} name="MotherMaidenName" placeholder="Enter Your Mother's Maiden Name" value={lname} onChange={e => LnameToUpperCase(e) && handleInputData(e)} required />
                            </div>
                            <div className="nextbuttonform">

                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStep(e)}><AiFillCaretLeft /> Back</Button>
                                <div style={{ margin: "auto" }}>
                                    {step}/8
                                </div>
                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextStep(e)}>Next <AiFillCaretRight /></Button>
                            </div>
                        </form>

                    </div>
                </>

            )
        case 6:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Make sure you fill the details as per your Aadhaar Card details to have a hassle free banking experience.
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <form method="post" >
                            <div className="aadharentry">
                                <label className="label">
                                    PINCODE*
                                </label>
                                <input className="form-input " type={"text"} name="pincode" placeholder="Enter Your PINCODE" value={aadharvalue} onChange={(e) => handleChange(e)} maxLength={"6"} minLength={"6"} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    State*
                                </label>
                                <input className="form-input" type={"text"} name="state" placeholder="Enter Your State" value={mname} onChange={(e) => MnameToUpperCase(e) && handleInputData(e)} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    District*
                                </label>
                                <input className="form-input" type={"text"} name="district" placeholder="Enter Your District" value={lname} onChange={e => LnameToUpperCase(e) && handleInputData(e)} required />
                            </div>
                            <div className="nextbuttonform">

                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStep(e)}><AiFillCaretLeft /> Back</Button>
                                <div style={{ margin: "auto" }}>
                                    {step}/8
                                </div>
                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextStep(e)}>Next <AiFillCaretRight /></Button>
                            </div>
                        </form>

                    </div>
                </>

            )
        case 7:
            return (
                <>
                    <div className="form-content-box">
                        <div className="text-val">
                            Make sure you fill the details as per your Aadhaar Card details to have a hassle free banking experience.
                            Fields marked *(star) are MANDATORY.
                        </div>
                        <form method="post" >
                            <div className="aadharentry">
                                <label className="label">
                                    Annual Income*
                                </label>
                                <input className="form-input " type={"text"} name="pincode" placeholder="Enter Your PINCODE" value={aadharvalue} onChange={(e) => handleChange(e)} maxLength={"6"} minLength={"6"} required />
                            </div>
                            <div className="aadharentry">
                                <label className="label">
                                    Marital Status*
                                </label>
                                <input className="form-input" type={"text"} name="state" placeholder="Enter Your State" value={mname} onChange={(e) => MnameToUpperCase(e) && handleInputData(e)} required />
                            </div>
                            <div className="termsandcondition">
                                <div className="condition">
                                    <div style={{ marginRight: "2%" }}>
                                        <input type={"checkbox"} required />
                                    </div>
                                    <div>
                                        All the information provided by me is completely true based on my knowledge and conscience.
                                    </div>
                                </div>
                                <div className="condition">
                                    <div style={{ marginRight: "2%" }}>
                                        <input type={"checkbox"} required />
                                    </div>
                                    <div>
                                        I am fully aware of the legal actions that I may have to face for providing wrong information.
                                    </div>
                                </div>
                                <div className="condition">
                                    <div style={{ marginRight: "2%" }}>
                                        <input type={"checkbox"} required />
                                    </div>
                                    <div>
                                        I will comply with the terms and conditions of the bank.
                                    </div>
                                </div>
                            </div>
                            <div className="nextbuttonform">

                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => prevStep(e)}><AiFillCaretLeft /> Back</Button>
                                <div style={{ margin: "auto" }}>
                                    {step}/8
                                </div>
                                <Button style={{ backgroundColor: "#48842c", width: "30%" }} onClick={e => nextStep(e)}>Next <AiFillCaretRight /></Button>
                            </div>
                        </form>

                    </div>
                </>
            )
        case 8:
            return (
                <>
                    <div className="form-content-box">
                        <div className="KYCtext">
                            KYC is a standard due diligence process used by financial institutions and other financial services companies to assess and monitor customer risk and verify a customer’s identity. KYC ensures that a customer is who they say they are.
                            <br />
                            <br />
                            Here, at RBH Bank, we provide a smooth process for digital KYC.
                            NO need to visit any branch physically. Get everything done through few clicks only.
                            <br />
                            <br />
                            Choose a date and preferred time for your KYC, our agent will verify your details through a video conference and guess what? You become our one of the valuable customer.
                            Make sure you are available on the choosen date and time.
                            After Submission kindly check your account dashboard for the video conferencing link and other information.
                        </div>
                        <div style={{display:"flex"}}>
                            <div style={{width:"60%"}}>

                                <form method="post" >
                                    <div className="aadharentry">
                                        <label className="label" style={{fontSize:"16px"}}>
                                            Choose Date:
                                        </label>
                                        <input className="form-input " type={"date"} name="kycDate" required />
                                    </div>
                                    <div className="aadharentry">
                                        <label className="label"style={{fontSize:"16px"}}>
                                            Choose Time:
                                        </label>
                                        <input className="form-input" type={"time"} name="kycTime" required />
                                    </div>
                                    <div className="nextbuttonform">
                                        <Button style={{ backgroundColor: "#48842c", width: "30%" }} >Submit</Button>
                                    </div>
                                </form>
                            </div>
                            <div style={{ width:"30%",marginLeft:"10%"}}>
                                <div style={{width:"60%" ,display:"flex",flexDirection:"column", alignItems:"center", border:"2px solid black", borderRadius:"5px", marginLeft:"30%"}}>
                                    <h6 style={{textDecoration:"underline"}}> Need Help?</h6>
                                    <a href="/Contact-us">Contact Us</a>
                                    <a href="#">FAQs</a>
                                    <a href="#">Why KYC?</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </>
            )
    }

}
export default Step1;