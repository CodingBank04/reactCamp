import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService';

export default function ProductList() {

    //const [products, setProducts]=useState([])
    //lifecycle hook
    const [products, setProuducts] = useState([]);

    useEffect(() => {
        let proudctService = new ProudctService()
        proudctService.getProducts().then(results => setProuducts(results.data.data))

    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Birim fiyati</Table.HeaderCell>
                        <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
                        <Table.HeaderCell>Aciklama</Table.HeaderCell>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {products.map(product => (
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                        </Table.Row>

                    ))
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
