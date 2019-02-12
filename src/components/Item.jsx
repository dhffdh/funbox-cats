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
        let {
            status,
            hover
        } = this.state;

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
            descSelectedHover,
            footerText,
            footerTextActive,
            footerTextDisable,
            messure
        } = this.props.info;


        let footerTextRes = footerText;
        switch(status){
            case statusList.active:
                footerTextRes = footerTextActive;
                break;
            case statusList.disable:
                footerTextRes = footerTextDisable;
                break;
        }


        return (
            <div className={"b-item" + (status ? " b-item--" + status : "") + (hover ? " hover" : "") }
                 onClick={this.clickHandler}
                 onMouseEnter={this.handleMouseEnter}
                 onMouseLeave={this.handleMouseLeave}
            >
                <div className="b-item__wrap">

                    <div className="b-item__head-border"></div>
                    <div className="b-item__head-bg"></div>

                    <div className="b-item__image">
                        <img src={img} alt=""/>
                    </div>

                    <div className="b-item__content">
                        <div className="b-item__desc">{ (status === statusList.active && hover) ? descSelectedHover : desc }</div>

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

                    <div className="b-item__footer">
                        { footerTextRes }
                    </div>

                </div>
            </div>
        );
    }
}

export { Item, statusList }
