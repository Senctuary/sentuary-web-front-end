import { Button } from "primereact/button";
import { Formik, Form, Field } from "formik";
import React, { useState } from "react";

const ChatGPT = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const phongCachOptions = [
    "hiện đại",
    "trẻ trung",
    "tối giản",
    "sang trọng",
    "cổ điển",
  ];
  const initialValues = {
    tuoi: "",
    gioiTinh: "",
    phongCach: [],
    message: "",
  };

  const handleSubmit = (values) => {
    setLoading(true);

    console.log(values);
    const apiEndpoint = "https://ai.fakeopen.com/v1/chat/completions";
    const apiKey = "pk-this-is-a-real-free-pool-token-for-everyone";

    let message = `Hãy đề xuất (dưới 250 từ) cho tôi 3 loại sen đá, 3 loại chậu đất nung phù hợp với tôi (trình bày với định dạng HTML chỉ có phần bên trong <body>). Tôi ${values.tuoi} tuổi, giới tính ${values.gioiTinh}, thích phong cách ${values.phongCach} và tôi muốn ${values.message}.`;
    console.log(message);

    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 50,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setShowForm(false);
        console.log(data);
        setResponse(data.choices[0].message.content);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <div>
      {showForm === true ? (
        <>
          <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}>
            <Form>
              <div>
                <label>
                  Tuổi:
                  <Field type="number" name="tuoi" />
                </label>
              </div>
              <div>
                <label>
                  Giới tính:
                  <Field type="text" name="gioiTinh" />
                </label>
              </div>
              <div>
                <label>
                  Phong cách:
                  {phongCachOptions.map((option) => (
                    <div key={option}>
                      <label>
                        <Field
                          type="checkbox"
                          name="phongCach"
                          value={option}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </label>
              </div>
              <div>
                <label>
                  Mong muốn của bạn:
                  <Field type="text" name="message" />
                </label>
              </div>
              <Button
                label="Gửi"
                type="submit"
                value="Submit"
                loading={loading}
              />
            </Form>
          </Formik>
        </>
      ) : (
        <>
          <div className="result-container">
            <div className="result-message" dangerouslySetInnerHTML={{__html: response}}></div>
            <Button
              label="Thử lại"
              onClick={() => {
                setShowForm(true);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ChatGPT;
