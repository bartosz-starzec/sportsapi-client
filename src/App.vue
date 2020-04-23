<template>
    <div id="app">
        <header>
            <div class="logo">
                <img alt="Vue logo" src="./assets/logo-login-production.png">
            </div>
            <div id="user-nav">
                <ul class="btn-group">
                    <li>
                        <router-link :to="{ name: 'Dashboard'}">
                            Dashboard
                        </router-link>
                    </li>
                    <li class="btn">
                        <router-link :to="{ name: 'ApiPost'}">
                            API Post View
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'ThirdRoute'}">
                            ThirdRoute
                        </router-link>
                    </li>
                    <li class="btn"><a title="SportsAdmin" href="http://dev.statscore.com/sportsadmin/events"><i
                            class="fa fa-wrench"></i> <span
                            class="text">SportsAdmin</span></a>
                    </li>
                    <li class="btn"><a title="LivematchPro" href="/livescorepro/admin/lmp/events"><i
                            class="fa fa-signal"></i> <span class="text">LivematchPro</span></a>
                    </li>
                    <li class="btn"><a title="PrematchPro" href="/livescorepro/admin/pmc/events"><i
                            class="fa fa-bolt"></i> <span class="text">PrematchPro</span></a>
                    </li>
                    <li class="btn"><a title="ScoutsFeed" href="/scoutsfeed/admin/events"><i class="fa fa-bolt"></i>
                        <span class="text">ScoutsFeed</span></a>
                    </li>
                    <li class="btn"><a title="SportsAPI" href="/sportsadmin/sports/available-stats-api"><i
                            class="fa fa-code"></i> <span class="text">SportsAPI</span></a>
                    </li>
                    <li class="btn"><a title="ScoreFrame" href="/scoreframe/admin/websites"><i
                            class="fa fa-bar-chart-o"></i> <span class="text">ScoreFrame</span></a>
                    </li>
                    <li class="btn"><a title="Team/LeagueCenter" href="/sportscenter/admin/websites"><i
                            class="fa fa-indent"></i> <span class="text">Team/LeagueCenter</span></a>
                    </li>
                    <li class="btn"><a title="SportsApiClient" href="/sportsapi-client"><span class="text">SportsApi Client</span></a>
                    </li>
                    <li class="btn"><a title="Your profile" href="/profile"><i class="fa fa-user"></i> <span
                            class="text">TestUser</span></a></li>
                    <li class="btn"><a title="" href="http://dev.statscore.com/auth/logout"><i class="fa fa-share"></i>
                        <span class="text">Logout</span></a>
                    </li>
                </ul>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        position: relative;
        width: 100%;
        z-index: 0;
        background-color: #292929;

        .logo {
            padding: 10px;
            width: 100px;

            img {
                width: 100%;
            }
        }
    }

    #user-nav {
        position: absolute;
        right: 30px;
        top: 0;
        z-index: 20;
        margin: 0;
        min-height: auto !important;
        height: 25px !important;

        ul {
            display: flex;
            justify-content: space-evenly;

            li {
                list-style: none;
                padding: 0 5px;
                border-right: 1px solid rgba(255, 255, 255, 0.6);

                a, router-link {
                    text-decoration: none;
                    font-size: 10px;
                    color: rgba(255, 255, 255, 0.6);
                }

                &:last-child {
                    border-right: none;
                }
            }
        }

    }

    body {
        font-family: "Helvetica Neue", Arial, sans-serif;
        margin: 0;
        text-align: center;
        height: 100vh;
        color: #2c3e50;
    }
</style>
