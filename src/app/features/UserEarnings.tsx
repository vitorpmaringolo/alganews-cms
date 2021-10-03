import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import useUser from "../../core/hooks/useUser";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings() {
    const { user,fetchUser } = useUser();

    useEffect(() => {
        fetchUser();
    }, [fetchUser])

    if (!user)
        return <UserTopTagsWrapper style={{ height: 123 }}>
            <Skeleton width={150} height={40}/>
            <Skeleton width={150} height={40}/>
            <Skeleton width={150} height={40}/>
            <Skeleton width={150} height={40}/>
        </UserTopTagsWrapper>

    return <UserTopTagsWrapper>
        <ValueDescriptor color="primary" description="Ganhos no mês" value={user.metrics.monthlyEarnings} isCurrency />
        <ValueDescriptor color="primary" description="Ganhos na semana" value={user.metrics.weeklyEarnings} isCurrency />
        <ValueDescriptor color="default" description="Ganhos de sempre" value={user.metrics.lifetimeEarnings} isCurrency />
        <ValueDescriptor color="default" description="Total de palavras" value={user.metrics.lifetimeWords} />
    </UserTopTagsWrapper>
}

const UserTopTagsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`