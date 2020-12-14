import React, { useState } from 'react';


const MyCard = () => {

    const [formData, updateFormData] = useState({
        pName: "",
        pTitle: " ",
        pDate: "",
        pSt: "",
        pURL: "",
        listData: []
    });

    const handleChange = (e, inputName) => {

        let cloneObj = { ...formData };
        cloneObj[inputName] = e.target.value.trim();
        updateFormData(cloneObj);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let cloneObj = { ...formData };

        let item = {
            pName: formData.pName,
            pTitle: formData.pTitle,
            pDate: formData.pDate,
            pSt: formData.pSt,
            pURL: formData.pURL,
        }
        cloneObj.listData.push(item);
        updateFormData(cloneObj);


    };
    const handleDelete = (index) => {

        let cloneObj = { ...formData }
        console.log(cloneObj)
        cloneObj.listData.splice(index, 1)
        updateFormData(cloneObj)
    }


    return (

        <>
            <div className="portfolio">
                <h2 className="text-center">My Portfolio</h2>

                <div className="form__container">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <form>
                                    <div class="form-group">

                                        <input type="text" class="form-control" name="pName" placeholder="Project Image" onChange={(e) => handleChange(e, 'pName')} />
                                        <input type="text" class="form-control" name="pTitle" placeholder="Project  Title" onChange={(e) => handleChange(e, 'pTitle')} />
                                        <input type="date" class="form-control" name="pDate" placeholder="Completion Date" onChange={(e) => handleChange(e, 'pDate')} />
                                        <input type="text" class="form-control" name="pSt" placeholder="Project status" onChange={(e) => handleChange(e, 'pSt')} />
                                        <input type="text" class="form-control" name="pURL" placeholder="Project url" onChange={(e) => handleChange(e, 'pURL')} />

                                    </div>

                                    <button type="submit" class="add__task" onClick={handleSubmit}> Submit </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                {

                    formData.listData.map((t, index) => (

                        <div className="card">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <img src={t.pName} alt=" my Image" />
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="card__des">
                                            <p className="starting__date">{t.pDate}</p>
                                            <h4 className="project__title"> {t.pTitle}  </h4>
                                            <p className="project__des"> {t.pSt} </p>
                                        </div>
                                        <div className="card__footer">
                                            <a href={t.pURL} className="project__url" target="_blank">  Go to Url </a>
                                            <button onClick={handleDelete} >Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>
        </>
    );
}

export default MyCard;





