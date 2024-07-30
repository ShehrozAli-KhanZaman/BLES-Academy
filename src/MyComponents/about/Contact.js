import React from "react";
import "./Contact.css"; // Ensure to include your CSS file

export const Contact = () => {
  const sections = [
    {
      title: "Personalized Learning",
      text: "Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.",
    },
    {
      title: "Trusted Content",
      text: "Created by experts, BLES Academy’s library of trusted practice and lessons covers various subjects. Always free for learners and teachers.",
    },
    {
      title: "Tools to Empower Teachers",
      text: "With BLES Academy, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.",
    },
  ];
  const contacts = [
    {
      title: "Phone",
      text: "+923008445790",
    },
    {
      title: "Email",
      text: "saghirahmad333@gmail.com",
    },
    {
      title: "Address",
      text: "BLES Academy(seek school),Allama Iqbal Road,Dharmpura Lahore \n پتہ : سید گرلز سکول نزد بارہ دری گراؤنڈ انفنٹری روڈ لاہور  https://maps.app.goo.gl/rUGuRrD8fXMYE8dJ9, Lahore, Pakistan, 54000",
    },
  ];

  return (
    <div className="contact-container">
      <div className="contact my-50">
        <h2 className="main-title">Contact</h2>
        <p className="contact-text">
          Please don't hesitate to contact us at the number provided below.We
          would be more happy to speak with you and address any question or
          concerns you may have!
        </p>
      </div>
      <div>
        <h2 className="main-title">We’d love to hear from you.</h2>
      </div>
      <div className="why-works">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-section mx-2">
            <h2 className="contact-title">{contact.title}</h2>
            <p className="contact-text">
              {contact.text.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="main-title">Why BLES ACADEMY Works</h2>
      </div>
      <div className="why-works">
        {sections.map((section, index) => (
          <div key={index} className="contact-section">
            <h2 className="contact-title">{section.title}</h2>
            <p className="contact-text">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
