import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);


    }
    renderComments(comments) {
        if (comments != null) {
            const comment = comments.map((cmt) => {
                return (

                    <ul className="list-unstyled">
                        <li>{cmt.comment}</li>
                        <li>-- {cmt.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cmt.date)))}</li>
                    </ul>


                );
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comment}
                </div>
            );
        }

        else
            return (
                <div></div>
            );
    }
    renderDish(dish) {
        if (dish != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>

                    {this.renderComments(dish.comments)}

                </div>
            );
        else
            return (
                <div></div>
            );
    }



    render() {
        const selectedDish = this.props.dish;

        return (
            <div className="container">
                {this.renderDish(selectedDish)}
            </div>

        );
    }

}

export default Dishdetail;