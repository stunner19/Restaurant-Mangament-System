import React from 'react';

export const Loading = () => {
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
};

// if the isLoading is set to true, I may just want to display a loading spinner on the screen just to keep the user informed about the fact that something is being 
// loaded from somewhere. So, to do that, I'm going to create a new component in my application called as the loading component.  font awesome which provides a spinner
// icon, fa spinner icon. And then if I apply the pulse font awesome class to that, then that will make the spinner rotate around. That's the intention of this. And then 
// fa three times the speed and then say fa forward spinning and then text primaries so the color of this spinner is going to be primary color, and then close the span.
// So, this will create a rotating spinnash on the screen. 