import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'


function RenderDish({ dish }) {

    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText> {dish.description}</CardText>
            </CardBody>
        </Card>
    );

}

function RenderComments({ comments }) {

    if (comments != null) {
        return (
            <div>
              <h4>Comments</h4>

                {comments.map((com) => {
                    return (

                        <ul key={com.id} className="list-unstyled">
                        <li>{com.comment}<br />
                            --{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}
                        
                        </li>
                    </ul>
                    );
                })}

            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

const Dishdetail = (props) => {
    if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div>
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
}

export default Dishdetail;