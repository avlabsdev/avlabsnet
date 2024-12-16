"use client";

// import Image from "next/image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { useEffect, useState } from 'react';

export default function Marketplace() {
    interface Product {
        id: number;
        title: string;
        description: string;
    }

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://x8ki-letl-twmt.n7.xano.io/api:HYBsW_cR/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);
    return (
        <section>
            <h1><i className="fa-solid fa-terminal text-4xl text-zinc-800"></i> Marketplace</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.title} - {product.description}</li>
                ))}
            </ul>
        </section>
    );
}