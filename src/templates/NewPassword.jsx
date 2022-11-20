import React from 'react';
import Image from 'next/image';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {
	return (
		<div className={styles.NewPassword}>
			<div className={styles['NewPassword-container']}>
				<Image src={logo} alt="logo" className="logo" />
				<h1 className={styles.title}>Create a new password</h1>
				<p className={styles.subtitle}>Enter a new passwrd for yue account</p>
				<form action="/" className={styles.form}>
					<label for="password" className={styles.label}>Password
						<input type="password" id="password" placeholder="*********" className={styles['input','input-password']} />
					</label>
					<label for="new-password" className={styles.label}>Password
						<input type="password" id="new-password" placeholder="*********" className={styles['input','input-password']} />
					</label>
					<input type="submit" value="Confirm" className={styles['primary-button', 'login-button']} />
				</form>
			</div>
		</div>
	);
};

export default NewPassword;
