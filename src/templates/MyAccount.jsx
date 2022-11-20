import React from 'react';
import styles from'@styles/MyAccount.module.scss';

const MyAccount = () => {
	return (
		<div className={styles.MyAccount}>
			<div className={styles['MyAccount-container']}>
				<h1 className={styles.title}>My account</h1>
				<form action="/" className={styles.form}>
					<div>
						<label for="name" className={styles.label}>Name
							<input className={styles.value}>Camila Yokoo</input>
						</label>
						<label for="email" className={styles.label}>Email
							<input className={styles.value}>camilayokoo@gmail.com</input>
						</label>
						<label for="password" className={styles.label}>Password
							<input className={styles.value}>*********</input>
						</label>
					</div>
					<input type="submit" value="Edit" className={styles['secondary-button', 'login-button']} />
				</form>
			</div>
		</div>
	);
};

export default MyAccount;
