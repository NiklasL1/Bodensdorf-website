import React, { useState } from "react";
import {
	FloatingMenu,
	MainButton,
	ChildButton,
} from "react-floating-button-menu";
import "./Header.css";

const HeaderMenu = () => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<FloatingMenu slideSpeed={500} direction="down" spacing={8} isOpen={isOpen}>
			<MainButton
				className="headerButton"
				iconResting={
					<i class="fa fa-bars fa-2x" aria-hidden="true" />
				}
				iconActive={
					<i class="fa fa-bars fa-2x" aria-hidden="true" />
				}
				onClick={() => setIsOpen(!isOpen)}
				size={70}
			/>
			<ChildButton
				className="headerButton"
				icon={<i class="fa fa-user fa-lg" aria-hidden="true" />}
				size={50}
				onClick={() => console.log("First button clicked")}
			/>
			<ChildButton
				className="headerButton"
				icon={<i class="fa fa-calendar fa-lg" aria-hidden="true" />}
				size={50}
			/>
			<ChildButton
				className="headerButton"
				icon={<i class="fa fa-globe fa-lg" aria-hidden="true" />}
				size={50}
			/>
            <ChildButton
				className="headerButton"
				icon={<i class="fa fa-star fa-lg" aria-hidden="true" />}
				size={50}
			/>
		</FloatingMenu>
	);
};

export default HeaderMenu;
