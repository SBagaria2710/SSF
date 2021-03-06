import React from 'react';

export const ReportCard = (props) => {
    const { id, title, description, imageUrl, date, cost } = props.data
    let d = new Date(date).toLocaleDateString();    
    return(
        <div key={props.index} className='col-12 col-lg-6'>
            <div className='custom-card' style={{display: 'flex'}}>
                <div className='col-3 col-lg-4' style={{overflow: 'hidden', transition: 'all 0.3s ease-out', padding: 0}}>
                    <img style={{width:'100%', minWidth: '148px'}} src={imageUrl} alt={title}/>
                </div>
                <div className='col-9 col-lg-8' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <p style={{color: 'rgb(0, 135, 122)', fontSize: '0.8rem', lineHeight: 1.5}}>{title}</p>
                    <p style={{fontSize: '0.7rem'}}>{description}</p>
                    <div>
                        <p style={{color: 'rgb(119, 130, 135)', fontSize: '10px', marginBottom: 0}}>PUBLISHED DATE: {d}</p>
                        <p style={{color: 'rgb(119, 130, 135)', fontSize: '10px', marginBottom: 0}}>COST: ${Math.round(cost)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}