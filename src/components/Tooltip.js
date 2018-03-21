import React, { Component } from 'react';
import "../styles/Tooltip.css";
import $ from "jquery";
export default class Tooltip extends Component {
	constructor(){
		super();
	}
	componentDidMount(){
		$("button").hover(function(){
			var posTop = $(this).offset().top;
			var posLeft = $(this).offset().left;
			var butWidth = $(this).outerWidth();
			var butHeight = $(this).outerHeight();
			var textHeight = $(".text").outerHeight();
			var textWidth = $(".text").outerWidth();
			var len = $(this).parent().find("button").length;
			if($(this).parent().attr("class") == "Top"){
				if($(this).index() == 0){
					$(".after").css({left:10,top:textHeight,transform:"rotate(0deg)"})
					$(".text").css({left:posLeft,top:posTop-butHeight-15,display:"block"})
				}
				else if($(this).index() == len-1){
					
					$(".after").css({left:textWidth-20,top:textHeight,transform:"rotate(0deg)"})
					$(".text").css({left:posLeft-20,top:posTop-butHeight-15,display:"block"})
				}else{
					$(".after").css({left:textWidth/2,top:textHeight,transform:"rotate(0deg)"})
					$(".text").css({left:posLeft-5,top:posTop-butHeight-15,display:"block"})					
				}
			}
			if($(this).parent().attr("class") == "Bottom"){
					$(".after").css({left:textWidth/2,top:-10,transform:"rotate(180deg)"})
					$(".text").css({left:posLeft-5,top:posTop+butHeight+10,display:"block"})		
					
			}
			if($(this).parent().attr("class") == "Left"){
					$(".after").css({left:textWidth+3,top:textHeight/2,transform:"rotate(-90deg)"})
					$(".text").css({left:posLeft-textWidth-10,top:posTop-5,display:"block"})	
			}
			if($(this).parent().attr("class") == "Right"){
					$(".after").css({left:-10,top:textHeight/2,transform:"rotate(90deg)"})
					$(".text").css({left:posLeft+textWidth+10,top:posTop-5,display:"block"})	
			}			
		})
	}
	render(){
		return(
			<div className="main">
				<div className="Top">
					<button>TopLeft</button>
					<button>TopCenter</button>
					<button>TopRight</button>
				</div>
				<div className="Left">
					<button>LeftCenter</button>
				</div>
				<div className="Right">
					<button>RightCenter</button>
				</div>
				<div className="Bottom">
					<button>BottomCenter</button>
				</div>
				
				<div className="text">Text
					<div className="after"></div>
				</div>
			</div>
		)
	}
}
