import React, { Component } from "react";
import styled, { css } from 'styled-components';
import {ArrowToTop} from '@styled-icons/boxicons-regular/ArrowToTop';

const Style = styled.div`
    .scroll-to-top{
        position: fixed;
        bottom: 0.5rem;
        right: 0.5rem;
        animation: fadeIn 700ms ease-in-out 1s both;
        cursor: pointer;
    }
`

const ArrowIcon = styled(ArrowToTop)`

`

export default class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
        }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 100) {
            this.setState({
            is_visible: true
            });
        } else {
            this.setState({
            is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    render() {
        const { is_visible } = this.state;
        return (
            <Style>
                <div className="scroll-to-top">
                {is_visible && (
                <div onClick={() => this.scrollToTop()}>
                   
                    <ArrowIcon size='60' aria-hidden ='true'/>
                </div>
                )}
                </div>
            </Style>

        );
    }
        
 
}
