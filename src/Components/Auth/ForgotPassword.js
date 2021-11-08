import React, { useState, useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ReactCodeInput from "react-code-input";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./auth.css";
import { MailContext } from "../../Context/MailContext";
import { UsersContext } from "../../Context/UsersContext";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const ForgotPassword = () => {
	const { t } = useTranslation();

	let history = useHistory();

	const [forgotPasswordVerification, setForgotPasswordVerification] =
		useState(undefined);
	const [forgotPasswordCodeVerified, setForgotPasswordCodeVerified] =
		useState(false);
	const [newPassword, setNewPassword] = useState(undefined);
	const [newPasswordConfirm, setNewPasswordConfirm] = useState(undefined);
	const [updatedUser, setUpdatedUser] = useState(undefined);
	const [newPasswordConfirmed, setNewPasswordConfirmed] = useState(false);

	const { list, getUsers, updatePassword, passwordUpdated } =
		useContext(UsersContext);

	const {
		forgotPasswordEmail,
		setForgotPasswordEmail,
		setForgotPasswordCode,
		sendingForgotPasswordEmail,
		setSendingForgotPasswordEmail,
		forgotPasswordEmailSent,
		sendForgotPasswordEmail,
		forgotPasswordCode,
	} = useContext(MailContext);

	useEffect(() => {
		setForgotPasswordCode(Math.floor(Math.random() * 90000) + 10000);
		console.log(sendingForgotPasswordEmail);
		getUsers();
	}, []);

	useEffect(() => {
		if (forgotPasswordEmailSent) {
			Swal.fire({
				icon: "success",
				title: `${t("passSent")}`,
			});
		}
	}, [forgotPasswordEmailSent]);

	useEffect(() => {
		if (newPasswordConfirmed) {
			updatePassword(updatedUser._id, updatedUser);
		}
	}, [newPasswordConfirmed]);

	useEffect(() => {
		if (passwordUpdated) {
			let timerInterval;
			Swal.fire({
				icon: "success",
				title: `${t("passUpdated")}`,
				timer: 2000,
				timerProgressBar: true,
				onBeforeOpen: () => {
					timerInterval = setInterval(() => {
						const content = Swal.getContent();
						if (content) {
							const b = content.querySelector("b");
							if (b) {
								b.textContent = Swal.getTimerLeft();
							}
						}
					}, 100);
				},
				onClose: () => {
					clearInterval(timerInterval);
				},
			});
			setTimeout(() => {
				history.push("/");
			}, 1000);
		}
	}, [passwordUpdated]);

	return (
		<div>
			<div id="passwordTop">
				<h2 id="passwordTitle">{t("pass1")}</h2>
				<Link to="/">
					<Button className="userProfileTitle">{t("user14")}</Button>
				</Link>
			</div>
			<CardColumns id="forgotPasswordCards">
				<Form
					onSubmit={(e) => {
						e.preventDefault();
						setSendingForgotPasswordEmail(true);
						if (list.find((user) => user.email === forgotPasswordEmail)) {
							sendForgotPasswordEmail();
							setUpdatedUser(
								list.find((user) => user.email === forgotPasswordEmail)
							);
						} else {
							Swal.fire({
								icon: "error",
								title: `${t("passError")}`,
							});
							setSendingForgotPasswordEmail(false);
						}
					}}
				>
					<Form.Group controlId="forgotPasswordEmail">
						<Card className="individualBooking" name="provideEmail">
							<Card.Header>{t("pass2")}</Card.Header>
							<Card.Body>
								{forgotPasswordEmailSent || sendingForgotPasswordEmail ? (
									<Form.Control
										type="email"
										placeholder="E-mail"
										disabled
										onChange={(e) => setForgotPasswordEmail(e.target.value)}
									/>
								) : (
									<Form.Control
										type="email"
										placeholder="E-mail"
										onChange={(e) => setForgotPasswordEmail(e.target.value)}
									/>
								)}
							</Card.Body>
							<Card.Footer>
								{forgotPasswordEmailSent ? (
									<Button variant="success" type="submit" disabled className="">
										{t("pass2butSent")}
									</Button>
								) : sendingForgotPasswordEmail ? (
									<Button variant="primary" type="submit" disabled className="">
										{t("pass2butWait")}
										<Spinner animation="border" size="sm" />
									</Button>
								) : (
									<Button variant="primary" type="submit" className="">
										{t("pass2but")}
									</Button>
								)}
							</Card.Footer>
						</Card>
					</Form.Group>
				</Form>
				{forgotPasswordEmailSent ? (
					<Card className="individualBooking" name="verifyCode">
						<Card.Header>{t("pass3")}</Card.Header>
						<Card.Body>
							{forgotPasswordCodeVerified ? (
								<ReactCodeInput type="text" fields={5} disabled />
							) : (
								<ReactCodeInput
									type="text"
									fields={5}
									onChange={(e) => setForgotPasswordVerification(e)}
								/>
							)}
						</Card.Body>
						<Card.Footer>
							{forgotPasswordCodeVerified ? (
								<Button variant="success" type="submit" disabled className="">
									{t("pass3butSucc")}
								</Button>
							) : (
								<Button
									variant="primary"
									type="submit"
									onClick={() => {
										if (forgotPasswordCode == forgotPasswordVerification) {
											setForgotPasswordCodeVerified(true);
										} else {
											Swal.fire({
												icon: "error",
												title: `${t("pass3Error")}`,
											});
										}
									}}
									className=""
								>
									{t("pass3but")}
								</Button>
							)}
						</Card.Footer>
					</Card>
				) : undefined}
				{forgotPasswordCodeVerified ? (
					<Form
						onSubmit={(e) => {
							e.preventDefault();
							if (newPassword !== newPasswordConfirm) {
								Swal.fire({
									icon: "error",
									title: `${t("pass4Error")}`,
								});
							} else {
								setUpdatedUser((prevState) => {
									return { ...prevState, password: newPassword };
								});
								setNewPasswordConfirmed(true);
							}
						}}
					>
						<Card className="individualBooking" name="newPassword">
							<Card.Header>{t("pass4")}</Card.Header>
							<Card.Body>
								<Form.Group>
									<Form.Label>{t("register7")}</Form.Label>
									{newPasswordConfirmed ? (
										<Form.Control type="password" disabled />
									) : (
										<Form.Control
											type="password"
											onChange={(e) => setNewPassword(e.target.value)}
										/>
									)}
								</Form.Group>
								<Form.Group>
									<Form.Label>{t("register8")}</Form.Label>
									{newPasswordConfirmed ? (
										<Form.Control type="password" disabled />
									) : (
										<Form.Control
											type="password"
											onChange={(e) => setNewPasswordConfirm(e.target.value)}
										/>
									)}
								</Form.Group>
							</Card.Body>
							<Card.Footer>
								{newPasswordConfirmed ? (
									<Button variant="primary" type="submit" disabled className="">
										{t("pass2butWait")}
										<Spinner animation="border" size="sm" />
									</Button>
								) : (
									<Button
										variant="primary"
										type="submit"										
										className=""
									>
										{t("pass4but")}
									</Button>
								)}
							</Card.Footer>
						</Card>
					</Form>
				) : undefined}
			</CardColumns>
		</div>
	);
};

export default ForgotPassword;
