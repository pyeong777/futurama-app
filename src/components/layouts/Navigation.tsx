import styled from "@emotion/styled";
import Link from "next/link";
import { ROUTES } from "../../constants";

interface ROUTE {
    ID: number,
    PATH: string,
    LABEL: string,
    SUBS?: Array<ROUTE>
}

export const Navigation = () => {
    return (
        <header>
            <Link href = "/">
                <a>
                    <Logo>
                        <LogoImage src="/logo.svg" alt="" />
                    </Logo>
                </a>
            </Link>
            <nav>
                <NavContainer>
                    {ROUTES.map((routeObject: ROUTE) => {
                        return (
                            <NavMenu key ={routeObject.ID}>
                                <Link href ={routeObject.PATH}>
                                    <a>
                                        {routeObject.LABEL}
                                    </a>
                                </Link>
                            </NavMenu>
                        )
                    })}
                </NavContainer>
            </nav>
        </header>
    )
}

const Logo = styled.h1`
    text-align: center;
    display: block;
    font-size: 2.5em;
    color: orange;
`

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1em 10em;
`

const NavMenu = styled.li`
    border: none;
    border-radius: 0.5em;
    padding: 2px 5px;
 &:hover {
    background-color: orange;
 }
`

const LogoImage = styled.img`
    width: 200px;
`