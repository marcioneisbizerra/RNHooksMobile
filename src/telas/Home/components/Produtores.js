import { TestScheduler } from "jest";
import React , { useEffect, useState }from "react";

import { FlatList, Text, StyleSheet } from "react-native";

import Produtor from "./Produtor";
import useProdutores from "../../../hooks/useProdutores";

export default function Produtores({ topo: Topo }){

    const [titulo, lista] = useProdutores();

    const topoLista = () => {
        return <>
                <Topo/>
                <Text style={ estilos.titulo }>{ titulo }</Text>
        </>
    }

    return <FlatList 
        data={lista}
        renderItem={({item }) => <Produtor { ...item }/>}
        keyExtractor={ ({ nome }) => nome}
        ListHeaderComponent={ topoLista }
    />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    }
})