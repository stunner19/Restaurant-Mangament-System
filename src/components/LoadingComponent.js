import React from 'react';

export const Loading = () => {
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
};

// fa three times the speed and then say fa forward spinning and then text primaries so the color of this spinner is going to be primary color.
