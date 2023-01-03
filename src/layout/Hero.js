import React from 'react';

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <section className='hero'>
                <div className='container-fluid container-md'>          
                    <div className='row align-items-end align-items-md-center'>
                        <div className='col-sm-6 col-md-6 order-sm-2 order-md-2 order-lg-0 d-block d-sm-none'>
                            <img src={require('./../assets/img/illustration-working.svg').default} alt="" />
                        </div>
                        <div className='col-sm-6 col-md-6' >
                            <h1 className='mb-1'>More than just shorter links</h1>
                            <p className='mb-4'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                            <button className='btn btn-info rounded-pill d-block mx-auto mx-sm-0' id="shorten">Get Started</button>
                        </div>
                        {/* <div className='col-sm-6 col-md-6'>
                            <img src={require('./../assets/img/illustration-working-1.svg').default} alt="" />
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;