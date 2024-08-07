import StyleCss from './SignIn.module.css'
import BlogLog from '../../../public/blog-logo.png'
import googleFonts from 'google-fonts';
import Footer from '../../components/Footer'

googleFonts.add({
    'Roboto': true,
    'Lato': [400, 700], // Ejemplo con múltiples pesos
});

const SignIn = () => {
    return (
        <>
        <div className={StyleCss.mainContainer}>
            <div className={StyleCss.logoContainer}>
                <img src={BlogLog} alt="My Image" className={StyleCss.logo}/>
            </div>
            <div className={StyleCss.container}>
                <h1 className={StyleCss.hookPhase}>
                    ¡Explora ideas, inspiración y conocimiento en cada clic!
                </h1>
                <div className={StyleCss.credentialsContainer}>
                    <div className={StyleCss.formContainer}>
                        <input className={StyleCss.formInput} type="email" id="fname" name="fname" placeholder='example@gmail.com'/>
                    </div>

                    <div className={StyleCss.formContainer}>
                        <input className={StyleCss.formInput} type="password" id="upassword" name="upassword" placeholder='Password'/>
                    </div>

                    <div className={StyleCss.formContainer}>
                        <a className={StyleCss.buttonContainer} type='submit' href="/">
                        Sign in
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    );
};

export default SignIn