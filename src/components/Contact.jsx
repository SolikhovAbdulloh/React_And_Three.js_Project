import styled from "styled-components";
import MapComponent from "./Map";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`;
const Contiener = styled.div`
  width: 100%;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Right = styled.div`
  flex: 2;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Title = styled.h2`
  font-weight: 200;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 500px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;
const Button = styled.button`
  background-color: #bb438c;
  color: white;
  border: none;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
`;
const Input = styled.input`
  border-radius: 5px;
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  padding: 10px;
`;
const Textarea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;
export default function Contact() {
  const [success, setSuccess] = useState(null);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_coxckzq", "template_hhtyylh", form.current, {
        publicKey: "mRal6NWcJJTEqIZMf",
      })
      .then(
        (res) => {
          console.log("SUCCESS!", res);
          form.current.reset();
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Contiener>
        <Left>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <Textarea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button disabled={success} type="submit">
              Send
            </Button>
            <p>{success === true && "Message success send conguratulation"}</p>
          </Form>
        </Left>
        <Right>
        </Right>
      </Contiener>
    </Section>
  );
}
