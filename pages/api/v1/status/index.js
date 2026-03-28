function status(request, response) {
  response.status(200).json({ chave: "avanti palestra!" });
}

export default status;
