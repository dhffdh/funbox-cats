import React from "react";

const statusList = {
    default: "",
    active: "active",
    disable: "disable",
};

class Item extends React.Component {

    constructor(props){
        super();
        this.state = {
            status: props.initStatus,
            hover: false,
            canUseActiveHover: true
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    clickHandler(ev){
        ev.preventDefault();

        if(this.state.status === statusList.disable){
            return false
        }
        this.setState({
            status: (this.state.status !== statusList.active) ? statusList.active : '',
            canUseActiveHover: false
        })
    }

    handleMouseEnter(ev){
        this.setState({
            hover: (this.state.status !== statusList.disable)
        })
    }

    handleMouseLeave(ev){
        this.setState({
            hover: false,
            canUseActiveHover: true
        })
    }

    render() {

        let { status, hover } = this.state;

        // Состояние наведения применяется к выбранной упаковке не е сразу,
        // а после того, как курсор ушел с нее после первоначального выбора.
        if(hover && this.state.status === statusList.active && !this.state.canUseActiveHover){
            hover = false
        }

        const {
            img,
            title,
            subTitle,
            features,
            desc,
            descActiveHover,
            footerBuyText,
            footerTextActive,
            footerTextDisable,
            messure
        } = this.props.info;

        let footerTextRes = null;

        switch(status){
            case statusList.active:
                footerTextRes = footerTextActive;
                break;
            case statusList.disable:
                footerTextRes = footerTextDisable;
                break;
            default:
                if(!!footerBuyText && footerBuyText !== ''){
                    footerTextRes = <span>{ footerBuyText } <a href="#" className="b-item__buylink" onClick={this.clickHandler}>купи</a>.</span>;
                }
                break;
        }

        return (
            <div className={"b-item" + (status ? " b-item--" + status : "") + (hover ? " hover" : "") }>
                <div className="b-item__wrap">

                    <div className="b-item__head-border"></div>
                    <div className="b-item__head-bg"></div>

                    <div className="b-item__image">
                        <img src={img} alt=""/>
                    </div>

                    <div className="b-item__content">
                        <div className="b-item__desc">{ (status === statusList.active && hover) ? descActiveHover : desc }</div>

                        <div className="b-item__title">{title}</div>
                        <div className="b-item__subtitle">{subTitle}</div>

                        <ul className="b-item__features">
                            {
                                features.map((feature, indexFeature) => {
                                    return <li>{feature}</li>
                                })
                            }
                        </ul>
                    </div>

                    <div className="b-item__messure">
                        <div className="b-item__messure-size">{messure}</div>
                        <div className="b-item__messure-letter">кг</div>
                    </div>

                    <div className="b-item__footer">{ footerTextRes }</div>

                    <div className="b-item__area"
                         onClick={this.clickHandler}
                         onMouseEnter={this.handleMouseEnter}
                         onMouseLeave={this.handleMouseLeave}
                    ></div>
                </div>
            </div>
        );
    }
}

export { Item, statusList }
