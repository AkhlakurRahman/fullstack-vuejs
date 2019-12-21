<template>
	<div id="app">
		<div class="nav">
			<div class="nav__logo">
				<router-link to="/">Image Share</router-link>
			</div>
			<div class="nav__search--bar">
				<input type="text" name="search" placeholder="Search images" />
			</div>
			<div class="nav__link--items">
				<router-link to="/">Gallery</router-link>
				<router-link to="/signin">Sign In</router-link>
				<router-link to="/signup">Sign Up</router-link>
			</div>
		</div>

		<main>
			<router-view />
		</main>
	</div>
</template>

<style lang="scss">
*,
*:before,
*:after {
	box-sizing: inherit;
	margin: 0;
	padding: 0;
}

html {
	box-sizing: border-box;
	font-size: 62.5%;
}

body {
	font-family: 'Fira Sans', arial, sans-serif;
	font-weight: 300;
	line-height: 1.6;
	margin: 0 auto;
}

a {
	font-weight: 400;
	color: #fff;
	text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	color: rgba(0, 0, 0, 0.84);
}

.nav {
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #42cafd;
	height: 10vh;

	&__logo {
		font-size: 2rem;
		margin-left: 2rem;
	}

	&__search--bar {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 0 0 30%;

		input {
			font-family: inherit;
			border: none;
			padding: 0.7rem 2rem;
			border-radius: 3px;
			width: 90%;
			transition: all 0.2s;

			&:focus {
				width: 100%;
				outline: none;
				background-color: rgb(240, 229, 229);
			}
		}
	}

	&__link--items {
		a {
			font-size: 1.6rem;
			padding: 1rem 2rem;
			transition: all 0.2s;
			border-radius: 3px;

			&:hover {
				background-color: #37a6d0;
			}

			&.router-link-exact-active {
				background-color: #37a6d0;
			}
		}
	}
}

/* #nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
