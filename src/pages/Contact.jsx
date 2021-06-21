import React from 'react';
import Formdata from '../components/Formdata';
import Form from '../components/Form';

const Contact = () => {
    return (
        <>
            <div className="text-center my-5">
                <h1 className="service-heading">Contact us </h1>
            </div>
            <div className="container-fluid">
                <div className="row mb-5 pb-5">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            {
                                Formdata.map((val, ind) => {
                                    return <Form
                                        index={ind}
                                        label={val.label}
                                        types={val.type}
                                        placeholder={val.placeholder}
                                    />
                                })
                            }
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;
