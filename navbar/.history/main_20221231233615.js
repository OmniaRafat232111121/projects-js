main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
.container {
  text-align: center;
}
#value {
  font-size: 6rem;
  font-weight: bold;
}
.btn {
  text-transform: uppercase;
  background: transparent;
  color: var(--clr-black);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid var(--clr-black);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  margin: 0.5rem;
}
.btn:hover {
  color: var(--clr-white);
  background: var(--clr-black);
}