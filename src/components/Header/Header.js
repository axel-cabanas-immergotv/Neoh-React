import React from 'react';

export default function Header() {
    const [ defuse, setDefuse ] = React.useState(false);
    const [ fixer, setFixer ] = React.useState(false);
    const handleClick = () => {
        setDefuse(!defuse);
    };
    const setClass = (boolean ,text) => {
        return boolean ? text : '';
    }
    const headerFixer = () => {
        return window.scrollY > 150 ? setFixer(true) : setFixer(false);
    }
    window.addEventListener('scroll', headerFixer);

    return (
        <>
        <header className={setClass(fixer, 'fixer')}>
            <section className='container'>
                <div className='header__container'>
                    <div className='header__container-logo'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/neoh-16431.appspot.com/o/assets%2Flogo.png?alt=media&token=58245d43-1613-4a38-a59f-4608a2af2683" alt="logo" />
                    </div>
                    <div onClick={handleClick} className={`header__container-menu ${setClass(defuse ,'active')}`}>
                        <div className='trigger'>
                            <p>Menu</p>
                            <div className='hamb'>
                                <div className='hamb-1'></div>
                                <div className='hamb-2'></div>
                                <div className='hamb-3'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
        <div className="Navbar container">
            <div className={`Navbar-overlay ${setClass(defuse ,'open')}`}></div>
            <div className={`Navbar-content ${setClass(defuse ,'open')}`}>
                <div onClick={handleClick} className={`trigger__container ${setClass(defuse ,'active')}`}>
                    <div className='trigger'>
                        <p>Close</p>
                        <div className='hamb'>
                            <div className='hamb-1'></div>
                            <div className='hamb-2'></div>
                            <div className='hamb-3'></div>
                        </div>
                    </div>
                </div>
                <div className="Navbar__menu-container">
                    <div className="nav-wrapper">
                        <div className="nav_menu">
                            <ul>
                                <li className="menu-item menu-item-has-children" style={{transform: 'translateX(0px)', opacity: 1}}>
                                    <a  href="#">Home</a>
                                    <ul className='sub-menu' >
                                        <li><a href="index.html">Home Static</a></li>
                                        <li><a href="index-kenburns.html">Full Kenburns</a></li>
                                        <li><a href="index-half-kenburns.html">Half Kenburns</a></li>
                                        <li><a href="index-half-slider.html">Half Slider</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item" style={{transform: 'translateX(0px)', opacity: 1}}><a href="about.html">About</a></li>
                                <li className="menu-item" style={{transform: 'translateX(0px)', opacity: 1}}><a href="collection.html">Collection</a></li>
                                <li className="menu-item" style={{transform: 'translateX(0px)', opacity: 1}}><a href="blog.html">Blog</a></li>
                                <li className="menu-item" style={{transform: 'translateX(0px)', opacity: 1}}><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}