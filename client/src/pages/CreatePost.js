import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CreatePost() {
    return (
        <div className="createPostPage">
            <Formik>
                <Form>
                    <label htmlFor="title">Title: </label>
                    <Field
                        id="inputCreatePost"
                        name="title"
                        placeholder="Limão é muito bom!"
                    />
                    <label htmlFor="title">Post: </label>
                    <Field
                        id="inputCreatePost"
                        name="postText"
                        placeholder="Tortas de limão são a melhor sobremesa!"
                    />
                    <label htmlFor="title">Username: </label>
                    <Field
                        id="inputCreatePost"
                        name="username"
                        placeholder="Jaolimao203"
                    />
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost;
