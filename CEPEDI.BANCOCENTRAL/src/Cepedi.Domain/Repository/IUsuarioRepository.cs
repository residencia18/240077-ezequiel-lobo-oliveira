﻿using Cepedi.BancoCentral.Domain.Entities;
namespace Cepedi.BancoCentral.Domain.Repository;
public interface IUsuarioRepository
{
    Task<UsuarioEntity> CriarUsuarioAsync(UsuarioEntity usuario);
    Task<UsuarioEntity> ObterUsuarioAsync(int idUsuario);
    Task<int> AtualizarUsuarioAsync(UsuarioEntity usuario);
}