import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function CreatePost() {
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must type a title!"),
        postText: Yup.string().required("You must type a post!"),
        username: Yup.string()
            .min(3)
            .max(15)
            .required("You must type a username!"),
    });
    const onSubmit = (data) => {
        axios
            .post("http://localhost:3001/posts/create", data)
            .then((response) => {
                console.log("IT WORKED");
            });
    };
    return (
        <div className="createPostPage">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="formContainer">
                    <label htmlFor="title">Title: </label>
                    <ErrorMessage name="title" component="span" />
                    <Field
                        id="inputCreatePost"
                        name="title"
                        placeholder="Limão é muito bom!"
                    />
                    <label htmlFor="postText">Post: </label>
                    <ErrorMessage name="postText" component="span" />
                    <Field
                        id="inputCreatePost"
                        name="postText"
                        placeholder="Tortas de limão são a melhor sobremesa!"
                    />
                    <label htmlFor="username">Username: </label>
                    <ErrorMessage name="username" component="span" />
                    <Field
                        id="inputCreatePost"
                        name="username"
                        placeholder="Jaolimao203"
                    />
                    <button type="submit">Create Post</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost;
