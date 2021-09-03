import Pdf from 'react-to-pdf';
import React from 'react';

export const PDF = () => {

    const ref = React.createRef()
    return (
        <>
            <div ref={ref}>
                <h1>Hello my friend</h1>
                <img src={'/images/1.jpg'} height={100} />
            </div>
            <Pdf targetRef={ref} filename='resume.pdf'>
                {({ toPdf }) => <button onClick={toPdf}>Download as pdf</button>}
            </Pdf>
        </>
    )
}

