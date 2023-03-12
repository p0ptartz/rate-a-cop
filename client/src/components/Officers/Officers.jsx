import React from 'react';
import "./Officers.css"

function Officers() {
    return (
        <section className="officer-container">
            <section className="officer-rating">
                <div className="officer-stats-container">
                    <div className="officer-stats">
                        <h2 className="officer-name">Officers Name</h2>
                        <p className="officer-ratings"><span className='avg'>3</span>/5</p>
                        <p className="review"></p>
                    </div>
                </div>
                <div className="graph-container">
                    <div className="graph-body">

                    </div>
                </div>
            </section>
        </section>
    );
}

export default Officers;