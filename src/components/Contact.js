import React from 'react';
import ja from '../img/ja.png';

const Contact = () => {
  return (
    <div className="container-fluid contact__wrapper mb-5">
      <div className="row d-flex flex-wrap">
        <div className="col-12 col-md-6 w-100 contact__section mt-5">
          <h1 className="">Paweł Kościelny</h1>
          <hr className="alert-info"/>
          <img className="img-fluid my-4" src={ja} alt="Pawel Koscielny"/>
          <p className="contact__about mt-3 p-4 border ">
            Hey I'm Paul, I'm 26yrs old. Currently gradute of University of Science and Technology (AGH), where I got bachelor degree, of Mining and Geology. I'm learning programing for about 1,5 year on my own. Lately finished course "Front-End Developer", in "Centrum Szkoleń Informatycznych Vedius" in Cracow. For now I'm discovering React/Redux library, during my current projects. <br/>
            Presently I'm' looking for my first proffesional experience where I can develop under supervision of expert developers.
          </p>
        </div>

        <div className="col-12 col-md-6 w-100 contact__section mt-5">
          <div className="contact__secondSection">
            <h1 className="">Contact me</h1>
            <hr className="alert-info "/>
            <ul className="list-group mx-auto pt-5 contact__list">
              <li className="list-group-item"><i className="fas fa-phone mr-3"></i><a href="tel:+48514719812">+48 514 719 812</a></li>
              <li className="list-group-item"><i className="fas fa-envelope mr-3"></i><a href="mailto:pawelkoscielny2904@gmail.com">pawelkoscielny2904@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
