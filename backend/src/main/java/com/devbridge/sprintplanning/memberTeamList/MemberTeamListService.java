package com.devbridge.sprintplanning.memberTeamList;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MemberTeamListService {

    private final MemberTeamListRepository memberTeamListRepository;

    public MemberTeamListService(MemberTeamListRepository memberTeamListRepository) {
        this.memberTeamListRepository = memberTeamListRepository;
    }

    public void createNewEntry(Long memberId, Long memberTeamId) {
        MemberTeamList memberTeamList = new MemberTeamList();
        memberTeamList.setCreationDate(LocalDateTime.now());
        memberTeamList.setMemberId(memberId);
        memberTeamList.setMemberTeamId(memberTeamId);
        memberTeamList.setIsDeleted(false);
        memberTeamListRepository.save(memberTeamList);
    }

    public List<MemberTeamList> getListOfMemberTeamsByUserId(Long memberId) {
        return memberTeamListRepository.getAllMemberTeamListsByMemberId(memberId);
    }
}
