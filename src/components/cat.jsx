import React, { Component } from "react";
import githubLogo from "../assets/GitHub-Mark-Light-32px.png";
// import gif from "./eye-icon-animate.gif";

export class Cat extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};

	style = {
		align: "middle"
	};

	information = {
		about:
			"Hi! I'm Anoushka, a sixteen year old high school student. I'm a full stack web developer with a passion for technology and Machine Learning.",
		education:
			"I'm currently an eleventh grade student at Delhi Public School, R.K. Puram, affiliated with CBSE.",
		projects: [
			{
				projectName: "p1",
				liveDemo: "https://github.com/shloksomani",
				linkToGithub: "https://github.com/shloksomani"
			},
			{
				projectName: "p2",
				liveDemo: "https://github.com/shloksomani",
				linkToGithub: "https://github.com/shloksomani"
			}
		],
		social: [
			{
				platform: "Github",
				link: "https://github.com/anoushkabhattacharya"
			},

			{
				platform: "Twitter",
				link: "https://twitter.com/bhanoushka"
			}
		]
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.value} </p>
				{this.handelCd()}
			</React.Fragment>
		);
	}

	handelCd = () => {
		const navigation = this.state.value.split(" ")[1];
		if (navigation) {
			const lower = navigation.toLowerCase();
			if (lower === "about") {
				return <p className="result">{this.information.about}</p>;
			} else if (lower === "education") {
				return <p className="result">{this.information.education}</p>;
			} else if (lower === "education") {
			} else if (lower === "projects" || lower === "project") {
				return (
					<React.Fragment>
						{this.information.projects.map(everyProject => {
							return (
								<p className="result">
									{everyProject.projectName}
									<a href={everyProject.liveDemo} target="_blank">
										Live Link
									</a>
									<a href={everyProject.linkToGithub} target="_blank">
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else if (
				lower === "socials" ||
				lower === "social" ||
				lower === "contact me" ||
				lower === "contactme" ||
				lower === "contact_me"
			) {
				return (
					<React.Fragment>
						{this.information.social.map(everySocial => {
							return (
								<p className="result">
									<a href={everySocial.link} target="_blank">
										{everySocial.platform}
									</a>
									<a href="https://github.com/shloksomani" target="_blank">
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else {
				return <p className="result">Opps wrong input</p>;
			}
		} else {
			return <p className="result">Opps wrong input</p>;
		}
	};
}

export default Cat;
