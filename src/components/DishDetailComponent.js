import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component {

	renderDish(dish) {
        if (dish != null)
            return(
            	<div className="col-12 col-md-5 m-1">
	                <Card>
	                    <CardImg width="100%" src={dish.image} alt={dish.name} />
	                    <CardBody>
	                      <CardTitle>{dish.name}</CardTitle>
	                      <CardText>{dish.description}</CardText>
	                    </CardBody>
	                </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments){
    	if(comments!=null){
    		const com=comments.map((co)=>{
    			return(
    				<li key={co.id}>
	    				<p>{co.comment}</p>
	    				<p>-- {co.author} , 
	    				&nbsp;
	                    {new Intl.DateTimeFormat('en-US', {
	                            year: 'numeric',
	                            month: 'short',
	                            day: '2-digit'
	                        }).format(new Date(Date.parse(co.date)))}
	    				</p>
    				</li>
    			)
    		});
    		return(
    			<div className="col-12 col-md-5 m-1">
    				<h4>Comments</h4>
    				<ul className="list-unstyled">
    					{com}
    				</ul>
    			</div>
    		);
    	}
    	else{
    		return(
    			<div></div>
    		);
    	}
    }

	render(){
		const dish = this.props.dish;
		if(dish==null){
			return(
				<div></div>
			);
		}
		const dishList = this.renderDish(dish)
		const commentList = this.renderComments(dish.comments)
		return(
		<div className="container"> 
			<div className="row">
				{dishList}
				{commentList}
			</div>
		</div>
		);
	}
}

export default DishDetail;