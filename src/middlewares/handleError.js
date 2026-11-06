export default (err, req, res, next) => {
    
    const status = err?.statusCode || err?.status || 500;

    if (status === 500) console.error(err);

    res.statusCode = status;

    res.json({
        status: 'error',
        statusCode: status,
        message: status != 500 ? err.message : 'Erro interno do servidor',       
    });
};